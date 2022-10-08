export const initialForm={
        name:'',
        email:'',
        gender:'Male',
        phoneNumber:'',
        password:'' 
};

export const validationState={
    name:{
      required:true,
      pattern:/^[a-zA-Z0-9p\s]+$/,
      patternMessage:'Name is not alphanumeric',
      requiredError:"Name Error",
      status:false
    },
    email:{
      required:true,
      pattern:/@+/,
      patternMessage:'Email must contain @',
      requiredError:"Email Error",
      status:false
    },
    
    phoneNumber:{
      required:true,
      pattern:/^[0-9]+$/,
      patternMessage:'Phone Number must contain only numbers',
      requiredError:'Phone Number Error'
    },
    password:{
      required:true,
      pattern:/^[a-zA-Z]{6,}$/,
      patternMessage:'Password must contain atleast 6 letters',
      requiredError:'Password Error',
      status:false
    }
}