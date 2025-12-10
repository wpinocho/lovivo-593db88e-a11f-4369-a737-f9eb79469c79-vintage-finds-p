import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Package, Sparkles, ShieldCheck, Leaf } from 'lucide-react';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Vintage secondhand & recommerce fashion store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section - Buy & Sell Vintage */}
      <section 
        className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 border-b overflow-hidden"
        style={{
          backgroundImage: `url('https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/593db88e-a11f-4369-a737-f9eb79469c79/hero-vintage.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 px-4 py-2 rounded-full mb-6">
              <Leaf className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">Sustainable Fashion</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Buy & Sell<br/>
              <span className="text-primary">Vintage Fashion</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Discover authenticated designer pieces with timeless style. Join the recommerce revolution and give luxury fashion a second life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Explore Finds
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Sell Your Items
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Authenticated</h3>
                <p className="text-sm text-muted-foreground">Every item verified for authenticity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Sparkles className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Curated Quality</h3>
                <p className="text-sm text-muted-foreground">Hand-picked vintage treasures</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Circular fashion for the planet</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Package className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure Shipping</h3>
                <p className="text-sm text-muted-foreground">Protected delivery worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Curated Collections
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully selected vintage pieces organized by style, brand, and occasion
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Featured Vintage Finds'
                }
              </h2>
              <p className="text-muted-foreground">
                Premium authenticated vintage fashion
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vintage Care Guide
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Preserve the beauty and longevity of your vintage pieces with our expert care tips. Each item deserves special attention to maintain its timeless appeal.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Storage Matters</h3>
                    <p className="text-muted-foreground">
                      Keep vintage pieces in breathable garment bags away from direct sunlight. Use padded hangers for structured items.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Gentle Cleaning</h3>
                    <p className="text-muted-foreground">
                      Always dry clean delicate vintage items. For leather goods, use specialized cleaners and conditioners.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Regular Maintenance</h3>
                    <p className="text-muted-foreground">
                      Inspect items regularly for loose threads or hardware. Address issues promptly to prevent further damage.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" variant="outline" className="mt-8">
                Full Care Guide
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/593db88e-a11f-4369-a737-f9eb79469c79/luxury-bags.jpg"
                  alt="Vintage care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <p className="text-sm font-medium mb-1">Quality Guaranteed</p>
                <p className="text-2xl font-bold">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Vintage Journey Today
          </h2>
          <p className="text-xl mb-8 text-background/80">
            Join thousands of fashion lovers who choose sustainable luxury. Every purchase makes a difference.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-10"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                document.getElementById('products')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }, 300);
            }}
          >
            Explore Finds
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};