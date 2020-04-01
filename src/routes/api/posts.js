import { Router } from 'express'

const router = Router()

router.get('/posts', (req, res) => {
res.json({todo: 'Get All Posts'})
})

router.get('/posts/:id', (req, res) => {
    res.json({todo: `Get one post with id: ${req.params.id}`})
})

router.post('/posts', (req, res) => {
    res.json({todo: 'Add one post'})
})
router.put('/posts/:id', (req, res) => {
    res.json({todo: `updating post with id: ${req.params.id}` })
})

router.delete('/posts/:id', (req, res) => {
    res.json({todo: `deleting post with id: ${req.params.id}` })
})

export default router