 let data=[
    {
        "name":"Dhaka",
        "district":[
           { 
            name:"Narshindhi",
        },
          {  
            name:"Narayanganj",
        },
                ],
        "name":"Sylhet",
        "district":[
           { 
            name:"Hobiganj",
        },
          {  
            name:"MaulaviBazar",
        },
                ],
        "name":"Chittagong",
        "district":[
           { 
            name:"Lakhsmipur",
        },
          {  
            name:"Noakhali",
        },
                ],
    },
];
export default data

let [division,SetDivision]=useState(data)
let [divisionName,SetDivisionName]=useState("")
let [district,setDistrict]=useState("")
let handleChange=(e)=>{
  if(e.target.value!="Select Division"){
    SetDivisionName(e.target.value)
    console.log(e.target.value)
  }

}

<select onChange={handleChange}>
        <option >Select Division</option>
        {division.map(item=>(
          <option value="">{item.name}</option>
        ))}
      </select>
      <select >
        <option >Select District</option>
        {!divisionName && <option >Please Select Division</option>}
        {division.map(item=>(
          item.name == divisionName &&
           item.district.map(it=>(
            <option value="">{it.name}</option>
          ))
        ))}
      </select>