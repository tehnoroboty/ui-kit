export type PostImage = {
  createdAt: string
  fileSize: number
  height: number
  uploadId: string
  url: string
  width: number
}

export type Owner = {
  firstName: string
  lastName: string
}

export type Post = {
  avatarOwner: string
  avatarWhoLikes: boolean
  createdAt: string
  description: string
  id: number
  images: PostImage[]
  isLiked: boolean
  likesCount: number
  location: string
  owner: Owner
  ownerId: number
  updatedAt: string
  userName: string
}
export type Item = {
  avatarWhoLikes: any[]
  createdAt: string
  description: string
  id: number
  images: ImageType[]
  isLiked: boolean
  likesCount: number
  location?: any
  owner: Owner
  ownerId: number
  updatedAt: string
  userName: string
}

export type ImageType = {
  createdAt: string
  fileSize: number
  height: number
  uploadId: string
  url: string
  width: number
}
