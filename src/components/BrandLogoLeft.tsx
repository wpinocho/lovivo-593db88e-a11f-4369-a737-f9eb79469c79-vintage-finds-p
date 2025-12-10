export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      {/* TEMPLATE: Replace /logo.svg with your brand logo */}
      <img 
        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/593db88e-a11f-4369-a737-f9eb79469c79/logo.svg.jpg" 
        alt="REVIVE - Vintage Fashion"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold tracking-wider">REVIVE</span>';
        }}
      />
    </a>
  )
}