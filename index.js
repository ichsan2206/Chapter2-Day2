const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs') // set view engine hbs

app.use('/assets', express.static(__dirname + '/assets')) 
app.use(express.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.render('index')
})

app.get('/contact', function(request, response){
    response.render('contact')
})


app.get('/myproject', function(request, response){
    response.render('myproject')
})

app.post('/myproject', function(request, response){
    // console.log(request);
    console.log(request.body);
    // console.log(request.body.inputTitle);

    response.redirect('/myproject')
})
// app.get('/detail-project/:id', function(request, response){

//     console.log(request.params.id);
//     let id = request.params.id

//     response.render('project-detail', {
//         blog: {
//             id,
//             title: 'Selamat datang',
//             content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos eveniet explicabo, provident animi porro deleniti velit facilis omnis illo, eligendi quaerat atque dicta qui dolor tenetur, vero minus magnam!',
//             author: 'Samsul Rijal',
//             postAt: '16 Juni 2022 10:24 WIB'
//         }
//     })
// })


app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})