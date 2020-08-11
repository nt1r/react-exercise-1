import React from 'react';
import YearLabel from './YearLabel';
import EducationContent from './EducationContent';
import '../../styles/education.scss';

class EducationExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eduArray: [
        {
          year: 1990,
          contentTitle: 'I was born in Katowice',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
        },
        {
          year: 2005,
          contentTitle: 'Secondary school specializing in artistic',
          content:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          year: 2009,
          contentTitle: 'First level graduation in Graphic Design',
          content:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repellat.',
        },
        {
          year: 2012,
          contentTitle: 'Second level graduation in Graphic Design',
          content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
        },
      ],
    };
  }

  render() {
    return (
      <div className={'education_experience'}>
        {this.state.eduArray.map((eduExperience) => {
          return (
            <div key={eduExperience.year}>
              <YearLabel year={eduExperience.year} />
              <EducationContent
                contentTitle={eduExperience.contentTitle}
                content={eduExperience.content}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationExperience;
