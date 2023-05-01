import React, { useState } from 'react';
import Accordion from './Accordion';
import ModifierProfil from './ModifierProfil';

function Accordion2() {
  const [sections, setSections] = useState([
    { title: <> 
     <div className="mt-6 flex justify-center">
                      <div className="flex justify-center md:justify-center">
                          <button
                      
                            id="Modifierprofile"
                            type="button"
                            className="rounded-full font-medium text-lg bg-rawdapurple px-4 py-2 text-rawdawhite "
                          >
                            Modifier mon profile
                          </button>
                      </div>
                    </div>
    </>,
     content: <>
     <ModifierProfil/>
     </>, isOpen: false },
  ]);

  const toggleSection = (index) => {
    const newSections = [...sections];
    newSections[index].isOpen = !newSections[index].isOpen;
    setSections(newSections);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <Accordion
          key={index}
          title={section.title}
          content={section.content}
          isOpen={section.isOpen}
          toggleSection={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}

export default Accordion2;