import { Schema, model } from "mongoose";

const empSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of employee is required"],
    },
    email: {
      type: String,
      required: [true, "Email of employee is required"],
      unique: true,
    },
    mobile: {
      type: Number,
    },
    designation: {
      type: String,
      required: [true, "Designation of employee is required"],
    },
    companyName: {
      type: String,
      required: [true, "Name of company is required"],
    },
  },
  { strict: "throw", versionKey: false, timestamps: true },
);

//export modekl
export const EmpModel = model("emp", empSchema);




// import { Schema,model,Types } from "mongoose";

// const employeeScheme=new Schema({
//     name:{
//         type:String,
//         required:[true,"namr required"],
//         min:[4,"min len is 4"]
//     },
//     email:{
//         type:String,
//         required:[true,"email required"],
//         unique:[true,"email exists"],  
//     },
//     mobile:{
//         type:Number,
        
//     },
//     designation:{
//         type:String,
//         required:[true,"required"]
//     },
//     companyName:{
//         type:String,
//         required:[true,"company name required"],
//     }
// },{
//     versionKey:false,
//     timestamps:true,
// }
// )

// export const empModel= model("emp",employeeScheme)