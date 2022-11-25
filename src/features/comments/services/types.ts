import { Comment, CreateCommentDto, UpdateCommentDto } from './model'

export interface CreateComment {
  (createCommentDto: CreateCommentDto): Promise<Comment>
}

export interface GetComments {
  (): Promise<Comment[]>
}

export interface UpdateComment {
  (updateCommentDto: UpdateCommentDto): Promise<Comment>
}

export interface DeleteComment {
  (id: Comment['_id']): Promise<void>
}
