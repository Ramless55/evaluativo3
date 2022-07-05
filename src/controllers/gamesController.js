const httpStatus = require('../helpers/httpStatus')

const gamesControllers = (Games) => {

    //trae por query a los usuarios
    const getAllGames = async (req, res, next) => {
        try{
            const { query } = req;

            const games = await Games.find(query)

            return res.status(httpStatus.CREATED).json(games);

        }catch (err){
            next(err)
        }
    }

    //crea usuarios
    const postGames = async (req, res, next) => {
        try{
            const { body } = req;

            const game = await new Games(body);
    
            await game.save();

            return res.status(httpStatus.CREATED).send('Juego cargado correctamente');

        }catch(err){
            next(err)
        }
    }

    //params hace referencia a cuando se pone :id
    const getGameById = async(req, res, next) => {
        try{
            const { params } = req;

            const game = await Games.findById(params.id);

            return res.status(httpStatus.OK).json(game);

        }catch {
            next(err)
        }
    }

    //edita
    const putGameById = async (req, res, next) => {
        try{
            const { params, body } = req;
            await Games.findByIdAndUpdate(
                
                  params.id,
                {
                    name: body.name,
                    developer: body.developer,
                    gender: body.gender,
                    gameModes: body.gameModes,
                    category: body.category,
                    platforms: body.platforms,
                    release: body.release,
                  },
              );
            return res.status(httpStatus.OK).send('Juego modificado correctamente');
        }catch{
            next(err)
        }
      }

      //elimina
    const deleteGameById = async  (req, res, next) => {
        try{
            const { params } = req;

            await Games.findByIdAndDelete(params.id)
        
            return res.status(httpStatus.OK).send('Eliminado correctamente')
        }catch(err){
            next(err)
        }
    }

    //esto sirve para guardar las funciones dentro de un objeto
        //esto se hace por que la funcion tiene funciones mas pequeñas dentro, entonces se trae el funcionamiento de ambas de esta forma
            //este objeto luego sera desestructurado para que vuelva a leerse como codigo js.
    return { getAllGames, getGameById, postGames, deleteGameById, putGameById}
}

module.exports = gamesControllers;