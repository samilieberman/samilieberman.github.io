import React from "react";
import { HeadingText, WorkWrapper, JobRow, JobCompany, JobTitleRow, JobTitle, JobDate } from "./styles";
import data from "../../data.json";

function Work() {
  return (
    <WorkWrapper fluid>
      <HeadingText>Work</HeadingText>
      {data.employment.map((employer, idx) => (
        <JobRow key={idx}>
          {employer.employer && <JobCompany><a href={employer.link} target="_blank" rel="noopener noreferrer">{employer.employer}</a></JobCompany>}
          <JobTitleRow>
            <JobTitle>{employer.title}</JobTitle>
            <JobDate>{employer.jobTime}</JobDate>
          </JobTitleRow>
        </JobRow>
      ))}
    </WorkWrapper>
  );
}
export default Work;
