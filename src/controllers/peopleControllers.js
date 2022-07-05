const httpStatus = require('../helpers/httpStatus')
const bcrypt = require('bcrypt');

const peopleControllers = (People) => {

    //trae por query a los usuarios
    const getAllPeople = async (req, res, next) => {
        try{
            const { query } = req;

            const people = await People.find(query)

            return res.status(httpStatus.CREATED).json(people);

        }catch (err){
            next(err)
        }
    }

    //crea usuarios
    const postPeople = async (req, res, next) => {
        try{
            const { body } = req;

            const people = await new People(body);
    
            await people.save();

            return res.status(httpStatus.CREATED).send('Subido correctamente');

        }catch(err){
            next(err)
        }
    }

    //params hace referencia a cuando se pone :id
    const getPeopleById = async(req, res, next) => {
        try{
            const { params } = req;

            const people = await People.findById(params.id);

            return res.status(httpStatus.OK).json(people);

        }catch {
            next(err)
        }
    }

    //edita
    const putPeopleById = async (req, res, next) => {
        try{
            const { params, body } = req;

            const encryptedPassword = await bcrypt.hash(body.password, 10)

            await People.findByIdAndUpdate(
                
                  params.id,
                {
                      firstName: body.firstName,
                      lastName: body.lastName,
                      nickName: body.nickName,
                      password: encryptedPassword,
                      cellPhone: body.cellPhone,
                      country: body.country,
                      datePeople: body.datePeople,
                      address: body.address,
                      email: body.email
                  },
              );
            return res.status(httpStatus.OK).send('Modificado correctamente');
        }catch{
            next(err)
        }
      }

      //elimina
    const deleteById = async  (req, res, next) => {
        try{
            const { params } = req;

            await People.findByIdAndDelete(params.id)
        
            return res.status(httpStatus.OK).send('Eliminado correctamente')
        }catch(err){
            next(err)
        }
    }

    //esto sirve para guardar las funciones dentro de un objeto
        //esto se hace por que la funcion tiene funciones mas pequeñas dentro, entonces se trae el funcionamiento de ambas de esta forma
            //este objeto luego sera desestructurado para que vuelva a leerse como codigo js.
    return { getAllPeople, getPeopleById, postPeople, deleteById, putPeopleById}
}

module.exports = peopleControllers;