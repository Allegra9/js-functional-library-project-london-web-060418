// fi = (function() {
//   return {
//     libraryMethod: function() {
//       return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
//     },
//
//     each: function(collection, iteratee) {
//       let newCollection;
//       if (Array.isArray(collection)){
//          newCollection = collection.slice()
//       }
//       else{
//          newCollection = Object.values(collection)
//       }
//
//       for (let i = 0; i < newCollection.length; i++) {
//
//         iteratee(newCollection[i])
//       };
//       return collection;
//     },
//
//     map: function(collection, iteratee) {
//       let newCollection;
//       if (Array.isArray(collection)){
//          newCollection = [];
//          for (let el of collection) {
//            newCollection.push(iteratee(el))
//          }
//          return newCollection
//       }
//       else{
//          newCollection = []
//          for (let el in collection){
//            newCollection.push(iteratee(collection[el]))
//          }
//          return newCollection
//       }
//     },
//     reduce: function(collection, iteratee, acc) {
//       let current = acc;
//       for(let el of collection) {
//         current = iteratee(current, el)
//       }
//       return current
//     },
//
//     find: function(collection, predicate) {
//       let match;
//       for(let el of collection) {
//         //console.log(el,predicate(el));
//         if (predicate(el)){
//           return el;
//         }
//       }
//     },
//     filter: function(collection, predicate) {
//       newCollection = []
//       for(let el of collection) {
//         if (predicate(el)){
//           newCollection.push(el);
//         }
//       }
//       return newCollection;
//     },
//     size: function(collection, predicate) {
//       if (Array.isArray(collection)){
//          return collection.length
//       }
//       else{
//          return Object.keys(collection).length
//       }
//     },
//     first: function(array, n) {
//       if (n){
//         let newCollection = []
//         for (var i = 0; i < n; i++) {
//           newCollection.push(array[i])
//         }
//         return newCollection
//       }
//       else{
//          return array[0]
//       }
//     },
//     last: function(array, n) {
//       if (n){
//         let newCollection = array.slice(array.length-n)
//         console.log(newCollection);
//         return newCollection
//       }
//       else{
//         return array[array.length -1 ]
//       }
//     },
//     compact: function(array) {
//       let newCollection = []
//       for (let el of array) {
//         if (!!el){
//           newCollection.push(el)
//         }
//       }
//       return newCollection
//     },
//     // sortBy: function(array, iteratee) {
//     //   let newCollection = []
//     //   for (let el of array) {
//     //     if (!!el){
//     //       newCollection.push(el)
//     //     }
//     //   }
//     //   return newCollection
//     // },
//     uniq: function(array, [isSorted], [iteratee]) {
//       let newCollection = []
//       for (let el of array) {
//         if (el){
//           newCollection.push(el)
//         }
//       }
//       return newCollection
//     },
//
//     keys: function(object) {
//       return Object.keys(object)
//     },
//
//     values: function(object) {
//       return Object.values(object)
//     },
//     functions: function(object) {
//       var newCollection = [];
//         for(let item in object) {
//           if(typeof object[item] === "function") {
//             newCollection.push(item)
//           }
//         }
//     return newCollection.sort();
//     }
//
//
//   }
// })()
// {name: "Allegra", location:"London"}
// const bla = fi.each({name: "Allegra", location:"London"}, (x) => {
//    x.toUpperCase()
//  });

// console.log(bla)

fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {

      if ( typeof collection === 'object' ) {

        let array = [Object.keys(collection)]
        array = array[0]

        for (let i = 0; i < array.length; i++) {
          element = array[i]
          iteratee(collection[element])
        }
      }
      return collection
    },

    map: function(collection, iteratee) {

      if ( typeof collection === 'object' ) {

        let array = [Object.keys(collection)]
        array = array[0]

        newArr = []
        for (let i = 0; i < array.length; i++) {
          element = array[i]
          newArr.push(iteratee(collection[element]))
        }
      }
      return newArr
    },

    reduce: function(collection, iteratee, acc =0) {

      //Iteration
      // collection = [1, 2, 3, 4]
      result = acc
      for (let i = 0; i < collection.length; i++){
      result = iteratee(result, collection[i], collection)
      }
      return result
    },

    find: function(collection, predicate) {

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])===true){
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])===true){
        newArr.push(collection[i])
        }
      }
      return newArr
    },


    size: function(collection) {
      let i = 0;

      if ( typeof collection === 'object' ) {
        let array = [Object.keys(collection)]
        array = array[0]
        // console.log(array);
        while (array[i] !== undefined) {
          i++
        }
      } return i
    },

    first: function(collection, n=0) {

      if (n === 0){
        return collection[0]
      } else {
        newArr=[]
        for (let i = 0; i < n ; i++) {
          newArr.push(collection[i])
        }
      return newArr
      }
    },

    last: function(collection, n=0) {

      if (n === 0){
        return collection[collection.length-1]
      } else {
        newArr=[]
        for (let i = 0; i < n ; i++) {
          x = collection.length - i
          newArr.unshift(collection[x-1])
        }
      }
      return newArr
    },

    compact: function(array) {

       newArr = []
       for (let i = 0; i < array.length; i++) {
         if (!!array[i] === true){
           newArr.push(array[i])
         }
       }
       return newArr
     },

     flatten: function(array, shallow) {

        let newArr = []

        for (let i=0; i < array.length; i++) {

          if (shallow == true){
            newArr  = newArr.concat(array[i])
          } else if (Array.isArray(array[i])){
            newArr  = newArr.concat(fi.flatten(array[i]));
          } else {
            newArr.push(array[i]);
          }
        }
        return newArr;
      },


       uniq: function(array, isSorted, callback) {
         let newArr = []
         let check = []
         for (let i = 0; i < array.length; i++){
           if (callback !== undefined) {
             if (!check.includes(callback(array[i]))){
               check.push(callback(array[i]))
               newArr.push(array[i])
             }
           } else {
             if (!newArr.includes(array[i])){
               newArr.push(array[i])
             }
           }
         }
         return newArr

         },

         keys: function(object) {
           let array = [Object.keys(object)]
           array = array[0]
           return array
         },

         values: function(object) {
           let array = [Object.values(object)]
           array = array[0]
           return array
         },

         functions: function(object) {
           const values = fi.values(object);
           let newArr = []
           for (var i = 0; i < values.length; i++) {
             if (typeof values[i] === "function")
              newArr.push(object[i])
           }
           return newArr
         },

         // sortBy: function(array, callback) {
         //   let newArr=[]
         //   if (callback !== undefined){
         //      newArr = array.sort(callback)
         //    }else{
         //      newArr = array.sort()
         //    }
         //    console.log(newArr)
         //    return newArr.reverse()
         // }
  }
})()

fi.libraryMethod()
