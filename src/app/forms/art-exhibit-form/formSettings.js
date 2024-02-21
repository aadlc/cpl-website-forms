// Importing the 'yup' library for schema validation
import * as yup from 'yup'

// Default form values for an artist's application
export const FORM_DEFAULT_VALUES  = {
  Additional_Links:'https://www.lapatilla.com/',
  Applicants:'Solo artist',
  Artist_Address:'My street SW',
  Artist_Name:'John Doe',
  Email:'js@abc.com',
  Library_Branch:null,
  Phone:'0123456789',
  Statement:'Hello',
}

// Array of branch codes
export const DISABLED_BRANCH_CODES = [
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
export const APPLICANT_TYPES = [
  { label: 'Solo Artist', value: 'Solo Artist' },
  { label: 'Artist Group', value: 'Artist Group' }
]


// FRONT-END VALIDATION ---------------------------------

// List of file accepted by the upload field
export const ACCEPTED_FILE_EXTENSIONS = ['vnd.openxmlformats-officedocument.wordprocessingml.document','jpeg', 'jpg', 'pdf', 'png']
// Regular expression for validating phone numbers
export const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// Maximum file size limit for attachments (10 Megabytes)
export const MAX_FILE_SIZE_MB = 10000000

// yup schema for front-end validation of form inputs
export const VALIDATION_SCHEMA = yup.object().shape({
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
    .matches(PHONE_REGEX, 'Phone number must be valid.'),
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
  attachments: yup
    .mixed()
    .required('Please attach files.')
    .test('totalFiles', 'You must attach three samples files', (value) => {
      return value && Object.keys(value).length === 3
    })
    .test('fileType', 'The attached files must be one of the following extensions: .docx .jpeg, .jpg, .pdf or .png', (value) => {
      let ret = true
      if (value) {
        const allowed = ACCEPTED_FILE_EXTENSIONS
        const keys = Object.keys(value)
        keys.forEach((key) => {
          const fileTypeStr = value[key].type
          const fileExt = fileTypeStr.split('/')[1].toLowerCase()
          if (fileExt !== allowed.find(item => item === fileExt)) {
            ret = false
          }
        })
      }
      return ret
    })
    .test('fileSize', 'One of the files exceeds the size limit of 10 megabyte', (value) => {
      let ret = true
      if (value) {
        const keys = Object.keys(value)
        keys.forEach((key) => {
          if (value[key].size > MAX_FILE_SIZE_MB) {
            ret = false
          }
        })
      }
      return ret
    }),
  Additional_Links: yup
    .string()
    .url()
})

