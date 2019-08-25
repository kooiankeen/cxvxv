class Student
{
    constructor(firstName,lastName,gender,dob,country,address,email)
    {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._dob = dob;
    this._country = country;
    this._address = address;
    this._email = email;
    }

    get firstName()
    {
      return this._firstName;
    }

    set firstName(newFirstName)
    {
      this._firstName = newFirstName;
    }

    get lastName()
    {
      return this._lastName;
    }

    set lastName(newLastName)
    {
      this._lastName = newLstName;
    }

    get gender()
    {
      return this._gender;
    }

    set gender(newGender)
    {
      this._gender = newGender;
    }

    get dob()
    {
      return this._dob;
    }

    set dob(newDob)
    {
      this._dob = newDob;
    }

    get country()
    {
      return this._country;
    }

    set country(newCountry)
    {
      this._country = newCountry;
    }

    get address()
    {
      return this._address;
    }

    set address(newGender)
    {
      this._address = newAddress;
    }

    get email()
    {
      return this._email;
    }

    set email(newEmail)
    {
      this._email = newEmail;
    }

    printRecord()
    {
      let output;
      output = "<h3>Student Name</h3>: "+this._firstName+","+this._lastName+"<br>"+"<small><b>Date Of Birth</b>: "+this._dob+"</small><br>"+"<b>Gender</b>: "+this._gender+"<br>"+"<b>Country</b>: "+this._country+"<br>"+"<b>Address</b>: "+this._address+"<br>"+"<b>Email</b>: "+this._email
      return output;
    }
}


function enrolStudent()
{
let gender = document.getElementsByName("gender");
let selectedGender;
let j =0 ;
for (let i =0;i<gender.length;i++)
{
  if (gender[i].checked)
  {
    selectedGender = gender[i].value;
    j=j+1
  }
}
if (j == 0)
{
  selectedGender = "";
}


let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let dob= new Date(document.getElementById("dob").value);
//changing dob format,start
let date = dob.getDate();
let month = dob.getMonth();
let year = dob.getFullYear();
dob = date+"/"+month+"/"+year;
if(isNaN(date)){dob="";}
//end
let country = document.getElementById("country")[document.getElementById("country").selectedIndex].value;
let address = document.getElementById("address").value;
let email = document.getElementById("email").value;

let newStudent = new Student(firstName,lastName,selectedGender,dob,country,address,email);
document.getElementById("resultArea").innerHTML = newStudent.printRecord();
}
