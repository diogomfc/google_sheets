import {NextApiRequest, NextApiResponse} from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) =>{
    try{
        const {method} = req;

            switch (method) {
                case 'GET':
                    res.status(200).json([
                        {id:1, name: 'Digoo Silva', method },
                        {id:2, name: 'Davi Lucca', method},
                        {id:3, name: 'Gabrielly', method},
                    ]);
                  break
                default:
                  res.setHeader('Allow', ['GET', 'PUT'])
                  res.status(405).end(`Method ${method} Not Allowed`)
              }
    } catch(err){
        res.status(500).json({statusCode: 500, message: err.message});
    }
};

export default handler;

