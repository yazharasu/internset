import { useRef } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import ActivityPage from './Components/ActivityPage/ActivityPage';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';


function App() {

  //ref to the desired component
  const pdfExportComponent = useRef(null);

  //kendos method to export pdf
  const exportPDFWithMethod = () => {
    let element = document.querySelector('.k-grid') || document.body;
    savePDF(element, {
    paperSize: 'A4'
    });
    };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
    pdfExportComponent.current.save();
    }
    };

  // Adding footer as page template
  const PageTemplate = () => {
    return (
      <div class="ms-4 d-flex flex-column align-items-center justify-content-center"
        style={{
          position: "absolute",
          bottom: "15px"
        }}
      >
        <div class="ms-4 mt-5 d-flex flex-column align-items-center justify-content-center dont-break footer">
            <p class="mb-0 p-0 fs-6 fw-light">Address: Air India Ltd., Chhatrapati Shivaji International Airport, T2,
              NIPTC Sahar, Andheri East, Mumbai, Maharashtra 400099
            </p>
            <p class="mb-0 p-0 text-secondary fs-6 fw-light">Website: www.airindia.in</p>
        </div>
        {/* Page {props.pageNum} of {props.totalPages} */}
      </div>
    );
  };

  return (
    <div className="App">

    <div class="d-flex flex-column align-items-center justify-content-center">
      <button onClick={exportPDFWithComponent}>Download internship diary</button>

      <PDFExport pageTemplate={PageTemplate} ref={pdfExportComponent} keepTogether=".dont-break" repeatHeaders=".footer" paperSize="A4" scale={0.55} margin={{ top: "1cm", left: ".75cm", right: ".75cm", bottom: "1cm" }} >
        <div class="d-flex flex-column align-items-center justify-content-center" >
          <ActivityPage />
        </div>
      </PDFExport>

    </div>

    </div>
  );
}

export default App;
