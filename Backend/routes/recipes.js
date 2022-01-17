const router = require ("express").Router();
let Recipe = require ("../models/Recipe");

router.route("/add").post((req, res) => {     //Add the recipe through the form

    
    const recipename = req.body.recipename;
    const ingredients = req.body.ingredients;
    const description = req.body.description;
    
    const newRecipe = new Recipe({

        recipename,
        ingredients,
        description,
      
    })


    newRecipe.save()                          //js promises to diplay output
           .then(() => res.json('New Recipe Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});



router.route("/").post((req,res) => {         //display all recipes

    Recipe.find().then((recipes)=>{
        res.json(recipes)
    }).catch((err) => {
        console.log(err)
    })
})


router.route("/update/:id").post(async (req , res)=>{  //update only one recipe data
    let RecipeID = req.params.id;
    const recipename = req.body.recipename;
    const ingredients = req.body.ingredients;
    const description = req.body.description;
    

    const updateRecipe = {

        recipename,
        ingredients,
        description,
       
    };

    await Recipe.findByIdAndUpdate(RecipeID , updateRecipe)    //check if there is a user with these conditions
    .then(()=>{
        res.status(200).send({status : "Recipe Updated"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});





router.route("/delete/:id").delete(async (req , res)=>{     //delete data of a certain user
    let RecipeID = req.params.id;

    await Recipe.findByIdAndDelete(RecipeID)
    .then(()=>{

        res.status(200).send({status : "Recipe has successfully deleted"});


    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});



//get the recipe data from a certain recipe

router.route("/get/:id").get(async(req,res) =>{
    let RecipeID = req.params.id;
    
    const recipe = await Recipe.findById(RecipeID)
    .then(()=>{
        res.status(200).send({status:"Recipe Fetched",recipe:recipe});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });

})

module.exports = router ;