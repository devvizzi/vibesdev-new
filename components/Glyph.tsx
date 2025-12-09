import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Toast from './ui/toast';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './ui/context-menu';

interface GlyphProps {
  logoPng: string;
  logoSvg: string;
  brandmarkSvg: string;
  brandKitUrl: string;
  brandPageUrl: string;
  onCopy?: (type: 'logo' | 'brandmark') => void;
  onMenuOpenChange?: (open: boolean) => void;
}

export default function Glyph({ 
  logoPng,
  logoSvg, 
  brandmarkSvg, 
  brandKitUrl,
  brandPageUrl,
  onCopy,
  onMenuOpenChange,
}: GlyphProps) {
  const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({ message: '', isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const copyToClipboard = async (svgUrl: string, type: 'logo' | 'brandmark') => {
    try {
      const response = await fetch(svgUrl);
      const svgText = await response.text();
      await navigator.clipboard.writeText(svgText);
      onCopy?.(type);
      showToast(`${type === 'logo' ? 'Logo' : 'Brandmark'} SVG code copied to your clipboard.`);
    } catch (error) {
      console.error('Failed to copy SVG to clipboard:', error);
    }
  };

  const downloadLogo = (format: 'png' | 'svg') => {
    const link = document.createElement('a');
    link.href = format === 'png' ? logoPng : logoSvg;
    link.download = `vibesdev-logo.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Logo ${format.toUpperCase()} downloaded successfully.`);
  };

  const downloadBrandKit = () => {
    const link = document.createElement('a');
    link.href = brandKitUrl;
    link.download = 'brand-kit.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openBrandPage = () => {
    window.location.href = brandPageUrl;
    // No notification shown for brand guidelines visit
  };

  return (
    <>
      <ContextMenu onOpenChange={onMenuOpenChange}>
        <ContextMenuTrigger className="absolute inset-0" />
        <ContextMenuContent>
          <ContextMenuItem onClick={() => downloadLogo('png')}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Logo (PNG)
            </div>
          </ContextMenuItem>
          
          <ContextMenuItem onClick={() => downloadLogo('svg')}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Logo (SVG)
            </div>
          </ContextMenuItem>
          
          <ContextMenuItem onClick={() => copyToClipboard(brandmarkSvg, 'brandmark')}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Copy brandmark as SVG
            </div>
          </ContextMenuItem>
          
          <ContextMenuSeparator />
          
          <ContextMenuItem onClick={openBrandPage}>
            Visit brand guidelines
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      {createPortal(<Toast message={toast.message} isVisible={toast.isVisible} onClose={hideToast} />, document.body)}
    </>
  );
}
