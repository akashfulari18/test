data = {

    name: "Suraj Lal Singh",
    toUpperCase: function() {
      // console.log(this.name.toUpperCase())
      let words = this.name.split(" ")
  
      let lower = "abcdefghijklmnopqrstuvwxyz"
      let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let bag = []
      for (let i = 0; i < words.length; i++) {
        let bag2 = ""
        for (let k = 0; k < words[i].length; k++) {
          for (let j = 0; j < lower.length; j++) {
            if (words[i][k] === lower[j]) {
              bag2 += (upper[j])
            } else if (words[i][k] === upper[j]) {
              bag2 += (upper[j])
            }
          }
        }
        bag.push(bag2)
  
      }
      console.log(bag.join(" "))
    },
    toLowerCase: function() {
      // console.log(this.name.toLowerCase())
  
      let words = this.name.split(" ")
  
      let lower = "abcdefghijklmnopqrstuvwxyz"
      let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let bag = []
      for (let i = 0; i < words.length; i++) {
        let bag2 = ""
        for (let k = 0; k < words[i].length; k++) {
          for (let j = 0; j < lower.length; j++) {
            if (words[i][k] === upper[j]) {
              bag2 += (lower[j])
            } else if (words[i][k] === lower[j]) {
              bag2 += (lower[j])
            }
          }
        }
        bag.push(bag2)
  
      }
      console.log(bag.join(" "))
    }
  }
  
  data["toUpperCase"]()
  data["toLowerCase"]()