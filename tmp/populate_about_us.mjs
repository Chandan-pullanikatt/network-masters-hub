const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'd4520591b5b6d8838130ca8cb4944e8c0c78fca6a9452343b27e2958203ba8b9c534aa0b3f68cb4edd49c2b70918867ede08c8ff3228d19b5aae15c8d5cdc58b4c2376faf5bed946de249dca538f656e6b30ff8ff5d9d2e6b6d345ffc65e162bd74956934f89f6323c08ebd07f17d13fd7b6205b83ec0ee007989081e3906c5f';

const aboutData = {
  data: {
    heroTitle: "Leading the IT Education Revolution",
    heroSubtitle: "Empowering the Next Generation of Network Engineers",
    heroSubtext: "We bridge the gap between academic knowledge and real-world networking challenges through immersive, hands-on training aligned with global certification standards.",
    coreValuesHeading: "Our Core Values",
    coreValuesSubheading: "The principles that define our educational philosophy.",
    coreValue1Title: "Expert-Led Instruction",
    coreValue1Desc: "Gain direct mentorship from certified and industry-experienced networking professionals.",
    coreValue2Title: "Round the Clock Lab Access",
    coreValue2Desc: "Practice, experiment, and strengthen your technical skills with hands-on infrastructure designed for real industry scenarios.",
    coreValue3Title: "Personalised Career Guidance",
    coreValue3Desc: "From certification preparation to job readiness, we support your journey toward securing a professional role in networking and IT infrastructure.",
    journeyHeading: "A Journey Rooted in Technical Excellence and a Passion for Mentorship",
    journeyText: `<p>Network Masters Hub was founded with a clear vision — to bridge the gap between theoretical knowledge and real-world IT infrastructure expertise.</p><p>The journey began with Pankaj's career as a Network Engineer, where hands-on experience across enterprise environments shaped a deep understanding of networking systems, troubleshooting, and infrastructure design. Over the years, this technical foundation evolved into mastery — mentoring aspiring professionals, leading advanced training programs, and guiding more than <strong>5,000+ students</strong> toward successful IT careers.</p><p>With over a decade of industry and training experience, Network Masters Hub stands as a platform built on practical exposure, real-world scenarios, and career-focused learning.</p>`,
    directorName: "Dr. Ravika Sethi",
    directorRole: "Director – Network Masters Hub",
    directorBio: `<p>Ravika Sethi is a dynamic marketing strategist and academic professional with over 15 years of experience in marketing, brand development, and business growth. She holds an MBA in Finance & Marketing and a PhD in Management, combining strategic insight with strong analytical expertise.</p><p>With extensive experience in strategic marketing, digital branding, social media management, lead generation, and performance-driven campaigns, she has consistently driven measurable growth and strengthened brand positioning across domains.</p><p>As Director and Marketing & Social Media Manager at Network Masters Hub, Ravika leads the organization's growth strategy, strengthens its digital presence, and aligns operations with long-term vision — building a future-ready learning ecosystem and positioning Network Masters Hub as a trusted name in advanced networking and technology education.</p>`,
    founderName: "Pankaj Sethi",
    founderRole: "Chief Executive & Founder",
    founderBio: `<p><em>"Beginning his career as a Network Engineer, Pankaj built his expertise through experience in enterprise IT environments."</em></p><p>Pankaj Sethi is the driving force behind Network Masters Hub — a technology leader, mentor, and industry practitioner committed to redefining networking education in India.</p><p>With more than a decade of industry exposure and having guided 5,000+ aspiring professionals, Pankaj has established himself as a trusted authority in networking and infrastructure training.</p>`,
    certificationsTitle: "Validated Expertise",
    certificationsDesc: "Certified with CCNA, Cisco Certified Specialist, and CCNP Enterprise, I bring advanced enterprise networking expertise backed by globally recognized Cisco standards. My approach focuses on practical skills, real-world troubleshooting, and job-ready implementation — not just theory."
  }
};

async function updateAboutUs() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/about-us`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify(aboutData)
    });

    const result = await response.json();
    if (response.ok) {
      console.log('Successfully updated About Us in Strapi!');
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.error('Failed to update About Us:', result);
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

updateAboutUs();
