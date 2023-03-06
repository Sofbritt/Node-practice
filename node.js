// let x=10+5
// console.log(x)

//  console.log(global)


// setTimeout(()=>{
//     console.log('hello')
// },2000)


// let x= new Date()
// global.date = x

// console.log(Date)


// console.log(__dirname,'this is dir name')

// console.log(__filename,'this is file name')


// console.log(process.argv)



// const name1='Ryan'


// module.experts=name1

const name3 = 'Sofi'

const abc = (somth) => {
    console.log(`hello ${somth}`)
}

const x=setTimeout(()=>{
 console.log(__filename)
},2000)

const a=setTimeout(()=>{
 console.log(__dirname)
},3000)

module.exports = {

    abs: abc,
    myname: name3,
    filename:x,
    dirname:a

}

