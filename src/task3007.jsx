import React from 'react';

const task3007 = () => {
      const certification = {
        certifications: [
          {
            id: 1, // Added unique id
            courseName: "Full Stack Web Development",
            platform: "Coursera",
            date: "2023-05-15",
            credentialURL: "xyz"
          },
          {
            id: 2, // Added unique id
            courseName: "Data Science Fundamentals",
            platform: "edX",
            date: "2022-11-20",
            credentialURL: "xyz"
          }
        ]
      };
    
      const academicProjects = {
        projects: [
          {
            id: 1, // Added unique id
            title: "E-commerce Website",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            description: "Built a full-featured online store with cart functionality and payment processing",
            outcome: "Achieved 95% test coverage and deployed to production"
          },
          {
            id: 2, // Added unique id
            title: "Weather Forecasting App",
            techStack: ["Python", "Flask", "OpenWeatherMap API"],
            description: "Developed a predictive weather application with 5-day forecasts",
            outcome: "Implemented successfully with 98% accuracy in metro areas"
          }
        ]
      };
    
      const languageSkill = {
        languages: [
          {
            id: 1, // Added unique id
            name: "English",
            spokenLevel: "Fluent",
            writtenLevel: "Advanced"
          },
          {
            id: 2, // Added unique id
            name: "Hindi",
            spokenLevel: "Native",
            writtenLevel: "Intermediate"
          },
          {
            id: 3, // Added unique id
            name: "Gujarati",
            spokenLevel: "Conversational",
            writtenLevel: "Basic"
          }
        ]
      };
    
      const address = {
        addresses: {
          permanent: {
            id: 1, // Added unique id
            street: "123 Main Street",
            city: "Mumbai",
            state: "Maharashtra",
            country: "India",
            postalCode: "400001"
          },
          current: {
            id: 2, // Added unique id
            street: "456 Tech Park Ave",
            city: "Bangalore",
            state: "Karnataka",
            country: "India",
            postalCode: "560001"
          },
          correspondence: {
            id: 3, // Added unique id
            street: "789 Business Center",
            city: "Hyderabad",
            state: "Telangana",
            country: "India",
            postalCode: "500001"
          }
        }
      };
    
      const socialProfiles = {
        profiles: [
          {
            id: 1, // Added unique id
            platform: "LinkedIn",
            url: "/in/yourprofile"
          },
          {
            id: 2, // Added unique id
            platform: "GitHub",
            url: "/github.com/yourusername"
          },
          {
            id: 3, // Added unique id
            platform: "Instagram",
            url: "/instagram.com/yourhandle"
          },
          {
            id: 4, // Added unique id
            platform: "Twitter",
            url: "/twitter.com/yourhandle"
          }
        ]
      };
    
      const emergencyContact = {
        contacts: [
          {
            id: 1, // Added unique id
            name: "Rahul Sharma",
            relation: "Father",
            phone: "+91 9876543210",
            address: "123 Main Street, Mumbai, Maharashtra, India - 400001"
          },
          {
            id: 2, // Added unique id
            name: "Priya Patel",
            relation: "Sister",
            phone: "+91 8765432109",
            address: "456 Tech Park Ave, Bangalore, Karnataka, India - 560001"
          }
        ]
      };
    
      return (
        <div>
          <h2>Certifications</h2>
          <ul>
            {certification.certifications.map((cert) => (
              <li key={cert.id}>
                <strong>{cert.courseName}</strong> - {cert.platform} ({cert.date}) - <a href={cert.credentialURL}>Credential</a>
              </li>
            ))}
          </ul>
    
          <h2>Academic Projects</h2>
          <ul>
            {academicProjects.projects.map((project) => (
              <li key={project.id}>
                <strong>{project.title}</strong> - Tech Stack: {project.techStack.join(', ')}<br />
                {project.description}<br />
                <em>{project.outcome}</em>
              </li>
            ))}
          </ul>
    
          <h2>Language Skills</h2>
          <ul>
            {languageSkill.languages.map((lang) => (
              <li key={lang.id}>
                <strong>{lang.name}</strong> - Spoken: {lang.spokenLevel}, Written: {lang.writtenLevel}
              </li>
            ))}
          </ul>
    
          <h2>Addresses</h2>
          <ul>
            {Object.entries(address.addresses).map(([key, addr]) => (
              <li key={addr.id}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)} Address:</strong> {addr.street}, {addr.city}, {addr.state}, {addr.country} - {addr.postalCode}
              </li>
            ))}
          </ul>
    
          <h2>Social Profiles</h2>
          <ul>
            {socialProfiles.profiles.map((profile) => (
              <li key={profile.id}>
                <strong>{profile.platform}</strong>: <a href={profile.url}>{profile.url}</a>
              </li>
            ))}
          </ul>
    
          <h2>Emergency Contacts</h2>
          <ul>
            {emergencyContact.contacts.map((contact) => (
              <li key={contact.id}>
                <strong>{contact.name}</strong> - Relation: {contact.relation}, Phone: {contact.phone}, Address: {contact.address}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    

export default task3007;
