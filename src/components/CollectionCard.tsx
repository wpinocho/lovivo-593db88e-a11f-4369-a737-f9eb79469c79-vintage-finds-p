import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border bg-card">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-xl text-foreground line-clamp-1">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full font-semibold">
                Featured
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full"
            onClick={() => onViewProducts(collection.id)}
          >
            View Products
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}