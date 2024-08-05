export type Folder = {
  id: number
  name: string
  destinations: number[]
}

// Define a type for the destination objects
export type Destination = {
  id: number
  name: string
  imageUrl: string
}
