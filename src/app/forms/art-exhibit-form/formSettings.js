// Importing the 'yup' library for schema validation
import * as yup from 'yup'

// Default form values for an artist's application
const defaultValues = {
  Additional_Links:'http://aadl.ca',
  Applicants:'Solo Artist',
  Artist_Address:'95 Palis Way SW',
  Artist_Name:'Alfonzo Angulo',
  Email:'alfonzo.AngulodelaCruz@calgarylibrary.ca',
  Library_Branch:null,
  Phone:'4034559178',
  Statement:'Hello World!',
}

// Array of branch codes
const disabeledLocations = [
  'CENT',
  'FISH',
  'FLAWN',
  'GIUFFRE', 
  'MPARK', 
  'NICHOLLS', 
  'NOSE', 
  'QUARRY', 
  'ROCKY', 
  'SADDLE',
  'SAGE', 
  'VILSQ', 
]

// RADIO GROUP: Array of applicant types 
const applicantTypes = [
  { label: 'Solo Artist', value: 'Solo Artist' },
  { label: 'Artist Group', value: 'Artist Group' }
]

// List of file accepted by the upload field
const ACCEPT_FILE_LIST = '.doc, .docx, .jpeg, .jpg, .pdf, .png'

// FRONT-END VALIDATION ---------------------------------

// Regular expression for validating phone numbers
const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// Maximum file size limit for attachments (10 Megabytes)
const maxMB = 10000000
// yup schema for front-end validation of form inputs
const schema = yup.object().shape({
  // Each field in the form is validated with specific rules
  Artist_Name: yup
    .string()
    .required('Please enter a name. The field cannot be left blank.'),
  Artist_Address: yup
    .string()
    .required('Please enter an address. The field cannot be left blank.'),
  Phone: yup
    .string()
    .required('Please enter a valid phone number. The field cannot be left blank.')
    .matches(phoneRegEx, 'Phone number must be valid.'),
  Email: yup
    .string()
    .email()
    .required('Please enter an email address. The field cannot be left blank.'),
  Applicants: yup
    .string()
    .required('Please select an option. The field cannot be left blank.'),
  Statement: yup
    .string()
    .required('Please enter a statement. The field cannot be left blank.'),
  Library_Branch: yup
    .string()
    .required('Please select a location. The field cannot be left blank.'),
  // attachements: yup
  //   .mixed()
  //   .required('Please attach files.')
  //   .test('totalFiles', 'You must attach three samples files', (value) => {
  //     return value && Object.keys(value).length === 3
  //   })
  //   .test('fileType', 'The attached files must be one of the following extensions: .docx .jpeg, .jpg, .pdf or .png', (value) => {
  //     let ret = true
  //     if (value) {
  //       const allowed = ['vnd.openxmlformats-officedocument.wordprocessingml.document', 'jpeg', 'jpg', 'pdf', 'png']
  //       const keys = Object.keys(value)
  //       keys.forEach((key) => {
  //         const fileTypeStr = value[key].type
  //         const fileExt = fileTypeStr.split('/')[1].toLowerCase()
  //         if (fileExt !== allowed.find(item => item === fileExt)) {
  //           ret = false
  //         }
  //       })
  //     }
  //     return ret
  //   })
  //   .test('fileSize', 'One of the files exceeds the size limit of 10 megabyte', (value) => {
  //     let ret = true
  //     if (value) {
  //       const keys = Object.keys(value)
  //       keys.forEach((key) => {
  //         if (value[key].size > maxMB) {
  //           ret = false
  //         }
  //       })
  //     }
  //     return ret
  //   }),
  Additional_Links: yup
    .string()
    .url()
})

// Exporting the constants and schema for use in other modules
export {
  ACCEPT_FILE_LIST,
  applicantTypes,
  defaultValues,
  disabeledLocations,
  schema,
}