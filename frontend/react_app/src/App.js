import logo from "./logo.svg";
import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { CForm, CCol, CFormLabel, CInputGroup, CInputGroupText, CFormSelect, CButton, CFormCheck, CFormInput } from "@coreui/react";

function App() {
  return (
    <CForm className="row row-cols-lg-auto g-3 align-items-center">
      <CCol xs={12}>
        <CFormLabel
          className="visually-hidden"
          htmlFor="inlineFormInputGroupUsername"
        >
          Username
        </CFormLabel>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            id="inlineFormInputGroupUsername"
            placeholder="Username"
          />
        </CInputGroup>
      </CCol>

      <CCol xs={12}>
        <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
          Preference
        </CFormLabel>
        <CFormSelect id="inlineFormSelectPref">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CCol>

      <CCol xs={12}>
        <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me" />
      </CCol>

      <CCol xs={12}>
        <CButton type="submit">Submit</CButton>
      </CCol>
    </CForm>
  );
}

export default App;
