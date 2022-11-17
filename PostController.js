import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            //const {author, title, content, picture} = req.body;
            //const post = await Post.create{author, title, content, picture}
            //console.log(req.files) инфо о файле картинки
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            //const posts = await Post.find();
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            //const {id} = req.params
            // if(!id){
            //     res.status(400).json({message:"id not given"})
            // }
            //const post = await Post.findById(id)
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            // const post = req.body
            // if(!post._id){
            //     res.status(400).json({message:"id not given"})
            // }
            // const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            //const {id} = req.params
            // if(!id){
            //     res.status(400).json({message:"id not given"})
            // }
            //const post = await Post.findByIdAndDelete(id);
            const post = await PostService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new PostController();