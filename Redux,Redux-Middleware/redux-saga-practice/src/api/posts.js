export const posts=[
    {
        id:1,
        title:"첫 번째 글 제목",
        content: "첫 번째 글 내용"
    },
    {
        id:2,
        title:"두 번째 글 제목",
        content: "두 번째 글 내용"
    },
    {
        id:3,
        title:"세 번째 글 제목",
        content: "세 번째 글 내용"
    }
];

export const getPosts = async()=>{
    await new Promise(resolve =>setTimeout(resolve,500));
    return posts;
}

export const getPost = async id=>{
    await new Promise(resolve =>setTimeout(resolve,500));
    console.log(posts.find(post=>post.id=== id))
    return posts.find(post=>post.id=== id);
}