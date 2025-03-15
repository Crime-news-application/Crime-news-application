import React from 'react';
import { AlertTriangle } from 'lucide-react';
import NewsTicker  from "../Component/Homecomponent/NewsTicker ";

const AboutUs = () => {
  return (
    <div className="bg-white text-black min-h-screen" style={{ '--primary-color': '#61090b' }}>
      {/* Crime scene tape header */}
      
      {/* News Ticker */}
      <div className="w-full py-2" style={{ backgroundColor: 'var(--primary-color)' }}>
        <NewsTicker />
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <div className="text-6xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-gray-800 cursor-pointer">
              <span className="font-extrabold">CRIME</span>
              <span className="font-light">GAZETTE</span>
            </div>
          </h1>
          <div className="h-1 w-32" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-xl text-gray-700 italic">Because justice begins with information</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">01.</span> Our Mission
            </h2>
            <p className="text-gray-800">
              In a world of headlines and soundbites, we dig deeper. Crime News Network was founded on the principle that 
              the public deserves comprehensive coverage of criminal justice—not just sensational stories, but the complex 
              realities behind them. We illuminate the shadows where truth hides.
            </p>
          </div>
          
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">02.</span> Our Approach
            </h2>
            <p className="text-gray-800">
              Our journalists don't just report—they investigate. With backgrounds in criminology, law enforcement, and legal 
              practice, our team brings unparalleled expertise to every story. We follow cases from crime scene to courtroom, 
              providing context that others miss.
            </p>
          </div>
          
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">03.</span> Our Ethics
            </h2>
            <p className="text-gray-800">
              Sensationalism sells, but integrity matters more. We balance the public's right to know with respect for victims, 
              due process, and the presumption of innocence. Our editorial standards prohibit prejudicial reporting that could 
              influence judicial outcomes.
            </p>
          </div>
          
          <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-var(--primary-color) mr-2">04.</span> Our Impact
            </h2>
            <p className="text-gray-800">
              Through investigative persistence, we've helped reopen cold cases, exposed misconduct, and advocated for 
              justice system reforms. Our coverage has been cited in legislative hearings and academic research, shaping 
              how society understands and addresses crime.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 bg-opacity-90 rounded-xl p-8 mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4 text-white">By The Numbers</h3>
            <p className="text-gray-300 mb-4">Our commitment to comprehensive criminal justice coverage spans:</p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-sm text-gray-400">Cases Covered</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-sm text-gray-400">Global Correspondents</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">Month</div>
              <div className="text-sm text-gray-400">Years Reporting</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">News Coverage</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6 text-white">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src="data:image/jpeg;base64,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" 
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              <h4 className="text-xl font-bold mb-1 text-white">Alexandra Reeves</h4>
              <p className="text-white mb-3 text-sm">Editor-in-Chief</p>
              <p className="text-gray-400 text-sm">Former prosecutor with 15 years experience covering high-profile criminal trials.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src="https://swaaa.com/wp-content/uploads/2022/11/mchen-677x1024.jpg" 
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              <h4 className="text-xl font-bold mb-1 text-white">Marcus Chen</h4>
              <p className="text-white mb-3 text-sm">Lead Investigator</p>
              <p className="text-gray-400 text-sm">Retired detective specialized in cold case investigations and forensic analysis.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" 
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              <h4 className="text-xl font-bold mb-1 text-white">Jasmine Torres</h4>
              <p className="text-white mb-3 text-sm">Data Analyst</p>
              <p className="text-gray-400 text-sm">Criminal justice statistician who brings context and pattern analysis to our reporting.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white-900 bg-opacity-20 border border-var(--primary-color) rounded-lg p-8 mb-16">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-gray text-3xl mr-3" />
            <h3 className="text-2xl font-bold">Our Editorial Process</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Every story passes through our rigorous 4-step verification process before publication:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-black bg-opacity-50 p-4 rounded text-white  text-center">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full  text-white flex items-center justify-center mx-auto mb-2">1</div>
              <p className="text-sm">Initial Source Verification</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded text-center text-white">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
              <p className="text-sm">Expert Consultation</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded text-white  text-center">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
              <p className="text-sm">Legal Review</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded text-white  text-center">
              <div className="bg-[#61090b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
              <p className="text-sm">Editor Approval</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Contact Our Newsroom</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a tip? Witness information? Story idea? Our secure channels ensure source protection.
          </p>
          <button
  className="bg-[#61090b] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-colors"
  onClick={() => window.open("https://wa.me/962787967253", "_blank")}
>
  Secure Tip Line
</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;











// import React from 'react';
// import { Droplet, Search, Shield, FileBadge, FileWarning, Skull } from 'lucide-react';

// const CreativeCrimeNewsAbout = () => {
//   // Your specified colors
//   const primaryColor = "#61090b";
//   const backgroundColor = "#000000";
//   const textColor = "#ffffff";
  
//   return (
//     <div className="bg-black text-white min-h-screen relative">
//       {/* Blood drip header */}
//       <div className="w-full h-12 relative overflow-hidden">
//         <div className="absolute inset-0 flex justify-between">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i} 
//               className="h-24 w-6 rounded-b-full" 
//               style={{backgroundColor: primaryColor, height: `${Math.random() * 60 + 30}px`}}
//             />
//           ))}
//         </div>
//       </div>
      
//       <div className="max-w-6xl mx-auto p-6 relative">
//         {/* Fingerprint background element */}
//         <div className="absolute opacity-5 top-0 right-0 w-full h-full pointer-events-none">
//           <svg viewBox="0 0 100 100" className="w-full h-full">
//             <path d="M50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C75,95 95,75 95,50 C95,25 75,5 50,5 Z M50,10 C72,10 90,28 90,50 C90,72 72,90 50,90 C28,90 10,72 10,50 C10,28 28,10 50,10 Z" fill={primaryColor} />
//             <path d="M50,15 C30,15 15,30 15,50 C15,70 30,85 50,85 C70,85 85,70 85,50 C85,30 70,15 50,15 Z M50,20 C67,20 80,33 80,50 C80,67 67,80 50,80 C33,80 20,67 20,50 C20,33 33,20 50,20 Z" fill={primaryColor} />
//             <path d="M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z M50,30 C62,30 70,38 70,50 C70,62 62,70 50,70 C38,70 30,62 30,50 C30,38 38,30 50,30 Z" fill={primaryColor} />
//             <path d="M50,35 C40,35 35,40 35,50 C35,60 40,65 50,65 C60,65 65,60 65,50 C65,40 60,35 50,35 Z M50,40 C57,40 60,43 60,50 C60,57 57,60 50,60 C43,60 40,57 40,50 C40,43 43,40 50,40 Z" fill={primaryColor} />
//             <path d="M50,45 C47,45 45,47 45,50 C45,53 47,55 50,55 C53,55 55,53 55,50 C55,47 53,45 50,45 Z" fill={primaryColor} />
//           </svg>
//         </div>
        

        
//         <div className="text-center mb-16 mt-12 relative">
//           <div className="inline-block relative">
//             <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{color: textColor}}>
//               CRIME<span style={{color: primaryColor}}>GAZETTE</span>
//             </h1>
//             <Droplet 
//               style={{color: primaryColor}} 
//               className="absolute -bottom-2 -right-2 w-8 h-8"
//             />
//           </div>
//           <div className="h-1 w-32 mx-auto mb-6" style={{backgroundColor: primaryColor}}></div>
//           <p className="text-xl italic" style={{color: "rgba(255,255,255,0.7)"}}>
//             Exposing the truth behind the tape
//           </p>
//         </div>
        
//         {/* Mission statement with blood splatter */}
//         <div className="relative mb-20 p-6 rounded-lg" style={{backgroundColor: "rgba(30,30,30,0.6)"}}>
//           <div className="absolute -top-10 -left-10">
//             <div className="relative">
//               <div className="w-24 h-24 rounded-full" style={{backgroundColor: primaryColor}}></div>
//               <div className="absolute top-2 left-14 w-8 h-8 rounded-full" style={{backgroundColor: primaryColor}}></div>
//               <div className="absolute top-16 left-20 w-4 h-4 rounded-full" style={{backgroundColor: primaryColor}}></div>
//               <div className="absolute top-5 left-5 w-10 h-10 rounded-full" style={{backgroundColor: primaryColor, opacity: 0.7}}></div>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold mb-6 text-center" style={{color: textColor}}>Our Blood-Sworn Mission</h2>
//           <p className="text-lg text-center max-w-3xl mx-auto" style={{color: "rgba(255,255,255,0.9)"}}>
//             In a world where darkness often conceals the truth, CRIMEWATCH cuts through the shadows. 
//             We don't just report crime—we dissect it, analyze it, and expose the veins of corruption that 
//             feed it. Our journalists pursue truth with the relentless determination of detectives, 
//             because we believe the public deserves nothing less than the complete, uncensored story.
//           </p>
//         </div>
        
//         {/* Core values with crime icons */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           <div className="p-6 rounded-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "rgba(30,30,30,0.3)", borderLeft: `4px solid ${primaryColor}`}}>
//             <div className="mb-4 flex justify-center">
//               <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(97,9,11,0.2)"}}>
//                 <Search style={{color: primaryColor}} size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-center" style={{color: textColor}}>Uncompromising Investigation</h3>
//             <p className="text-center" style={{color: "rgba(255,255,255,0.7)"}}>
//               We pursue every lead until it bleeds truth. Our investigative team includes former detectives, 
//               forensic specialists, and legal experts who bring decades of experience to every story.
//             </p>
//           </div>
          
//           <div className="p-6 rounded-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "rgba(30,30,30,0.3)", borderLeft: `4px solid ${primaryColor}`}}>
//             <div className="mb-4 flex justify-center">
//               <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(97,9,11,0.2)"}}>
//                 <Shield style={{color: primaryColor}} size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-center" style={{color: textColor}}>Victim Advocacy</h3>
//             <p className="text-center" style={{color: "rgba(255,255,255,0.7)"}}>
//               Behind every crime statistic is a human life forever altered. We give voice to victims 
//               and survivors, ensuring their stories aren't lost in the cold narrative of criminal proceedings.
//             </p>
//           </div>
          
//           <div className="p-6 rounded-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "rgba(30,30,30,0.3)", borderLeft: `4px solid ${primaryColor}`}}>
//             <div className="mb-4 flex justify-center">
//               <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(97,9,11,0.2)"}}>
//                 <FileBadge style={{color: primaryColor}} size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-3 text-center" style={{color: textColor}}>Journalistic Integrity</h3>
//             <p className="text-center" style={{color: "rgba(255,255,255,0.7)"}}>
//               We separate fact from speculation with surgical precision. Our reputation is built on 
//               credibility and accuracy in an age when both are increasingly rare commodities.
//             </p>
//           </div>
//         </div>
        
//         {/* Blood cell-inspired stats section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-10 text-center" style={{color: textColor}}>
//             The Vital Statistics
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-3xl font-bold relative" style={{color: primaryColor}}>18+</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Years Active</span>
//             </div>
            
//             <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-4xl font-bold relative" style={{color: primaryColor}}>10K+</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Cases Covered</span>
//             </div>
            
//             <div className="w-36 h-36 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-3xl font-bold relative" style={{color: primaryColor}}>97</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Global Locations</span>
//             </div>
            
//             <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center relative" style={{backgroundColor: "rgba(97,9,11,0.2)", border: `2px solid ${primaryColor}`}}>
//               <div className="absolute inset-0 rounded-full" style={{
//                 background: `radial-gradient(circle at 30% 30%, ${primaryColor} 0%, transparent 50%)`
//               }}></div>
//               <span className="text-3xl font-bold relative" style={{color: primaryColor}}>42</span>
//               <span className="text-sm relative" style={{color: "rgba(255,255,255,0.7)"}}>Awards Won</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Crime dossier team section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-2 text-center" style={{color: textColor}}>The Task Force</h2>
//           <div className="flex justify-center mb-8">
//             <div className="h-1 w-32" style={{backgroundColor: primaryColor}}></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {['Lead Investigator', 'Criminal Psychologist', 'Data Analyst'].map((role, index) => (
//               <div key={index} className="p-6 rounded-lg" style={{backgroundColor: "rgba(30,30,30,0.4)"}}>
//                 <div className="flex items-start mb-4">
//                   <div className="mr-4 mt-1">
//                     <div className="w-2 h-16" style={{backgroundColor: primaryColor}}></div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold" style={{color: primaryColor}}>{role}</h4>
//                     <p className="mb-4" style={{color: "rgba(255,255,255,0.7)"}}>
//                       {index === 0 ? 'Former homicide detective with 20+ years experience solving the most challenging cases.' : 
//                        index === 1 ? 'Specialized in profiling and analyzing the psychological patterns of criminal behavior.' : 
//                        'Expert in forensic data analysis and pattern recognition across large crime datasets.'}
//                     </p>
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
//                         <FileWarning size={16} style={{color: primaryColor}} />
//                       </div>
//                       <div style={{color: "rgba(255,255,255,0.5)"}}>
//                         {index === 0 ? 'Cases solved: 127' : 
//                          index === 1 ? 'Profiles created: 89' : 
//                          'Patterns identified: 216'}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Crime scene evidence section */}
//         <div className="mb-20 p-8 rounded-lg" style={{backgroundColor: "rgba(97,9,11,0.1)", border: `1px dashed ${primaryColor}`}}>
//           <div className="flex items-center mb-6">
//             <Skull className="mr-3" size={32} style={{color: primaryColor}} />
//             <h2 className="text-3xl font-bold" style={{color: textColor}}>The Evidence of Impact</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <div className="mb-4 p-4 rounded" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
//                 <p className="italic" style={{color: "rgba(255,255,255,0.8)"}}>
//                   "CRIMEWATCH's investigation into police misconduct led to 
//                   department-wide reforms and three senior officers facing charges."
//                 </p>
//                 <p className="text-right mt-2" style={{color: primaryColor}}>— National Justice Review</p>
//               </div>
//               <div className="p-4 rounded" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
//                 <p className="italic" style={{color: "rgba(255,255,255,0.8)"}}>
//                   "Their coverage of the Westside Serial Killings provided crucial leads 
//                   that helped authorities apprehend the suspect within 48 hours."
//                 </p>
//                 <p className="text-right mt-2" style={{color: primaryColor}}>— Chief Daniel Foster, Metro Police</p>
//               </div>
//             </div>
//             <div>
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold mb-2" style={{color: primaryColor}}>Cases Reopened</h3>
//                 <div className="w-full h-4 rounded-full mb-1" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
//                   <div className="h-full rounded-full" style={{width: "78%", backgroundColor: primaryColor}}></div>
//                 </div>
//                 <p className="text-right text-sm" style={{color: "rgba(255,255,255,0.6)"}}>32 cold cases</p>
//               </div>
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold mb-2" style={{color: primaryColor}}>Justice Served</h3>
//                 <div className="w-full h-4 rounded-full mb-1" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
//                   <div className="h-full rounded-full" style={{width: "92%", backgroundColor: primaryColor}}></div>
//                 </div>
//                 <p className="text-right text-sm" style={{color: "rgba(255,255,255,0.6)"}}>147 convictions</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2" style={{color: primaryColor}}>Victims Supported</h3>
//                 <div className="w-full h-4 rounded-full mb-1" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
//                   <div className="h-full rounded-full" style={{width: "85%", backgroundColor: primaryColor}}></div>
//                 </div>
//                 <p className="text-right text-sm" style={{color: "rgba(255,255,255,0.6)"}}>500+ families</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Contact section with blood fingerprint */}
//         <div className="text-center mb-16 relative">
//           <div className="absolute -right-10 top-0 opacity-20 pointer-events-none">
//             <svg viewBox="0 0 100 140" width="160" height="220">
//               <path d="M50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C75,95 95,75 95,50 C95,25 75,5 50,5 Z M50,96 C30,96 10,120 10,140 L90,140 C90,120 70,96 50,96 Z" fill={primaryColor} />
//             </svg>
//           </div>
          
//           <h2 className="text-3xl font-bold mb-6" style={{color: textColor}}>Join the Investigation</h2>
//           <p className="text-lg mb-8 max-w-xl mx-auto" style={{color: "rgba(255,255,255,0.7)"}}>
//             Have information on an unsolved case? Witness to corruption? Story tip?
//             Our secure channels protect your identity.
//           </p>
//           <button className="px-8 py-3 rounded-full font-bold text-lg transition-colors" 
//             style={{
//               backgroundColor: primaryColor, 
//               color: textColor,
//               boxShadow: `0 0 20px rgba(97,9,11,0.5)`
//             }}>
//             Anonymous Tip Line
//           </button>
//         </div>
//       </div>
      
//       {/* Blood drip footer */}
//       <div className="w-full h-12 relative overflow-hidden transform rotate-180">
//         <div className="absolute inset-0 flex justify-between">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i} 
//               className="h-24 w-6 rounded-b-full" 
//               style={{backgroundColor: primaryColor, height: `${Math.random() * 60 + 30}px`}}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreativeCrimeNewsAbout;

