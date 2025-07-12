
import { getTeamMemberImage } from "@/utils/imageUtils";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const OurTeam = () => {
  // Define team members with roles
  const teamMembers: TeamMember[] = [
    { name: "Ananya Sharma", role: "Founder & CEO", bio: "Visionary leader with 15+ years in luxury retail" },
    { name: "Raj Mehta", role: "Head Perfumer", bio: "Master perfumer trained in Grasse, France" },
    { name: "Priya Patel", role: "Marketing Director", bio: "Award-winning marketer with global brand experience" },
    { name: "Arjun Kapoor", role: "Customer Experience Head", bio: "Expert in luxury client services" }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-perfume-black">
          Our Team
        </h2>
        <p className="mt-2 text-gray-600 font-montserrat max-w-2xl mx-auto">
          Meet the passionate experts behind Perfume Shop
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto group-hover:shadow-lg transition-all duration-300">
              <img 
                src={getTeamMemberImage(member.role.split(' ')[0])} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-playfair font-bold text-perfume-black">{member.name}</h3>
            <p className="text-gray-600 font-montserrat">{member.role}</p>
            <p className="text-gray-500 font-montserrat text-sm mt-2 max-w-xs mx-auto">{member.bio}</p>
          </div>
        ))}
      </div>
      
      {/* Image gallery of our retail spaces */}
      <div className="mt-16">
        <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-perfume-black">
          Our Retail Spaces
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1619989635229-1ed86e29d921?q=80&w=800&auto=format&fit=crop" 
            alt="Interior display" 
            className="w-full h-48 object-cover rounded-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1609428079875-943eec63e9b2?q=80&w=800&auto=format&fit=crop" 
            alt="Perfume bottle display" 
            className="w-full h-48 object-cover rounded-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop" 
            alt="Perfume testing area" 
            className="w-full h-48 object-cover rounded-md hover:opacity-90 transition-opacity"
          />
          <img 
            src="https://images.unsplash.com/photo-1609428079375-948cdb848c89?q=80&w=800&auto=format&fit=crop" 
            alt="Luxury product showcase" 
            className="w-full h-48 object-cover rounded-md hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
