// React Imports
import type { HTMLAttributes } from 'react'

// Third-party Imports
import Image from 'next/image'
import { PlusCircle } from 'lucide-react'

// Type Imports
import type { Album } from '../data/Albums'

// Component Imports
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

// Util Imports
import { cn } from '@/lib/utils'

// Data Imports
import { playlists } from '../data/Playlists'

type AlbumArtworkProps = HTMLAttributes<HTMLDivElement> & {
  album: Album
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function AlbumArtwork({
  album,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className='overflow-hidden rounded-md'>
            <Image
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                'h-auto w-auto object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className='w-40'>
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-48'>
              <ContextMenuItem>
                <PlusCircle className='mr-2 h-4 w-4' />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map(playlist => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='mr-2 h-4 w-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3' />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className='mt-5 space-y-1 text-sm'>
        <h3 className='leading-none font-medium'>{album.name}</h3>
        <p className='text-muted-foreground text-xs'>{album.artist}</p>
      </div>
    </div>
  )
}
