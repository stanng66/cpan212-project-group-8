import Navigation from "./Navigation";

export default function Header() {
    const detectiveName = "Detective";
    const caseStatus = "Investigating";
    /* const { detectiveName, caseStatus } = useCaseContext(); */   // Uncomment when item 7 (context) is implemented
    
  return (
    <header className="header">
      {/*<h1> <span>Murder Mystery Investigation</span> </h1>*/}
      {/* Navigation sits above the case information */}
      <Navigation />

      <div className="header-info">
        <div className="header-case">
          <p>Case: Title</p>
        </div>

        <div className="header-status">
          <p>Case Status: {caseStatus}</p>
        </div>

        <div className="header-detective">
          <p>{detectiveName}</p>
        </div>
      </div>
    </header>
  );
}