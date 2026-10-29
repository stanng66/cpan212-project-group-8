export default function Header() {
    const detectiveName = "Detective";
    const caseStatus = "Investigating";
    /* const { detectiveName, caseStatus } = useCaseContext(); */   // When item 7 (context) is implemented
    
  return (
    <header className="header">
      <h1> <span>Murder Mystery Investigation</span> </h1>

      <div ClassName="header-case">
        <p>Case: Murder in Gallery 206</p>
      </div>

      <div ClassName="header-status">
        <p>Case Status: {caseStatus}</p>
      </div>

      <div ClassName="header-detective">
        <p>{detectiveName}</p>
      </div>
    </header>
  );
}