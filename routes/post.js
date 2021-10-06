const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/WishList');

//Getall
router.get('/', async (req, res)=>{
    try {
        const all = await Post.find();
        res.json(all);
    } catch (err) {
        res.json({message:err})
    }
});

//Get by Name
router.get('/n/:name', async (req,res)=>{
    try {
        const src = await Post.find({nama_buku: req.params.name});
        res.json(src);
    } catch (err) {
        res.json({message:err});
    }
})

//Get by Publisher
router.get('/m/:penulis', async (req,res)=>{
    try {
        const src = await Post.find({merk: req.params.penulis});
        res.json(src);
    } catch (err) {
        res.json({message:err});
    }
})

//Submit
router.post('/post', async(req, res)=>{
    const post = new Post({
        nama_buku: req.body.nama_buku,
        penulis: req.body.penulis,
        tahun: req.body.tahun
    });
    try{
    const savedPost = await post.save()
    res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
});

//search by id
router.get('/getid/:Id', async (req, res)=>{
    try{
    const post = await Post.findById(req.params.Id);
    res.json(post);
    }catch(err){ 
        res.json({message: err})
    }
});

//Delete
router.delete('/del/:Id', async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.Id})
        res.json(removedPost)
    } catch (err) {
        res.json({message:err})
    }
});

//Update
router.patch('/put/:Id', async (res, req)=>{
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.Id },
            { $set: { nama_buku: req.body.nama_buku } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message:err})
    }
})

module.exports = router;