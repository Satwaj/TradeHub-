import "./Curriculum.scss";

const Curriculum = () => {
  return (
    <section className="curriculum">
      {/* Top Badge */}
      <div className="badge"> Complete Curriculum</div>

      {/* Heading */}
      <h1 className="title">4-Week Comprehensive Program</h1>
      <p className="subtitle">
        Structured journey from market basics to professional trading across 3
        intensive months
      </p>

      {/* Cards */}
      <div className="curriculum-list">
        <div className="curriculum-card blue">
          <div className="meta">
            <span className="month">Week 1</span>
            <span className="weeks">Days 1-7</span>
          </div>
          <h2>Foundation & Market Basics</h2>
          <span className="arrow">›</span>
        </div>

        <div className="curriculum-card purple">
          <div className="meta">
            <span className="month">Week 2</span>
            <span className="weeks">Days 8-14</span>
          </div>
          <h2>Advanced Trading & Market Structure</h2>
          <span className="arrow">›</span>
        </div>

        <div className="curriculum-card green">
          <div className="meta">
            <span className="month">Week 3</span>
            <span className="weeks">Days 15-21</span>
          </div>
          <h2>Professional Trading & Funding</h2>
          <span className="arrow">›</span>
        </div>

        <div className="curriculum-card orange">
          <div className="meta">
            <span className="month">Week 4</span>
            <span className="weeks">Days 22-28</span>
          </div>
          <h2>Advanced Psychology & Live Capital Deployment</h2>
          <span className="arrow">›</span>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
