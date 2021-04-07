import dbConnect from '../../../utils/dbConnect';
import Blog from '../../../models/Blog';

export default async function handler(req, res){
    const method = req.method;
    const { id } = req.query;

    await dbConnect();

    switch(method){
        case "GET":
          try {
            const blog = await Blog.findById(id) /* find all the data in our database */
            res.status(200).json({ success: true, data: blog })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break;
        case "DELETE":
            Blog.findByIdAndDelete(id,(err) => {
              if(!err){
                res.status(200).json({ message: `blog ${id} deleted` });
              } else {
                res.status(400).json({ success: false })
              }
            });
          break;
    }
}