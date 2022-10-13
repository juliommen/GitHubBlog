import { Route, Routes } from 'react-router-dom'
import { Posts } from './pages/Posts/index'
import { PostDetail } from './pages/PostDetail/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post-detail" element={<PostDetail />} />
    </Routes>
  )
}
