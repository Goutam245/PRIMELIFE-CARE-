export const IMG = {
  hero: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=85&fit=crop&auto=format",
  care1: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=85&fit=crop&auto=format",
  care2: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=85&fit=crop&auto=format",
  servicesBg: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=85&fit=crop&auto=format",
  team: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85&fit=crop&auto=format",
  meal: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=85&fit=crop&auto=format",
  companion: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=800&q=85&fit=crop&auto=format",
  about: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=85&fit=crop&auto=format",
  avatar1: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85&fit=crop&auto=format",
  avatar2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&fit=crop&auto=format",
  avatar3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=85&fit=crop&auto=format",
  avatar4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=85&fit=crop&auto=format",
};

export const SERVICES = [
  {
    slug: "personal-care",
    title: "Personal Care & Hygiene",
    desc: "Assistance with bathing, grooming, dressing, and mobility — helping clients maintain their dignity and independence every day.",
    img: IMG.care1,
    features: ["Bathing & grooming assistance", "Dressing & toileting support", "Mobility & transfer help", "Medication reminders"],
  },
  {
    slug: "companionship",
    title: "Companionship & Social Support",
    desc: "Meaningful conversation, shared activities, and emotional presence that fight loneliness and bring joy back into daily life.",
    img: IMG.companion,
    features: ["Daily conversation & activities", "Hobbies and games", "Walks & outings", "Light housekeeping"],
  },
  {
    slug: "skilled-medical",
    title: "Skilled Medical Support",
    desc: "Licensed nurses providing wound care, injections, vital monitoring, and post-hospital recovery support directly in your home.",
    img: IMG.care2,
    features: ["RN-supervised care plans", "Wound care & injections", "Vital signs monitoring", "Post-hospital recovery"],
  },
  {
    slug: "meal-prep",
    title: "Meal Planning & Preparation",
    desc: "Nutritious, doctor-approved meals prepared fresh in your kitchen — tailored to dietary restrictions and personal taste.",
    img: IMG.meal,
    features: ["Custom meal planning", "Dietary restriction expertise", "Grocery shopping included", "Mealtime companionship"],
  },
  {
    slug: "dementia-care",
    title: "Alzheimer's & Dementia Care",
    desc: "Specialized caregivers trained in memory care techniques that reduce anxiety, maintain routine, and preserve quality of life.",
    img: IMG.about,
    features: ["Specialized dementia training", "Routine & safety focus", "Cognitive engagement", "Family education & support"],
  },
  {
    slug: "respite-care",
    title: "Respite Care for Families",
    desc: "Short-term professional care that gives family caregivers the rest they need — knowing their loved one is in expert hands.",
    img: IMG.team,
    features: ["Hourly, daily, or weekly", "24/7 emergency availability", "Trained substitute caregivers", "Seamless handoff process"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "PRIMELIFE CARE GROUP has been an absolute blessing for our family. The caregiver they matched with my mother is not only highly professional but truly compassionate. Mom looks forward to every visit — that says everything.",
    name: "Margaret T.",
    city: "Boston, MA",
    avatar: IMG.avatar1,
  },
  {
    quote: "After my father's stroke, we were overwhelmed and didn't know where to turn. PRIMELIFE stepped in immediately, created a detailed care plan, and put our minds at ease. The communication has been outstanding throughout.",
    name: "Robert K.",
    city: "Atlanta, GA",
    avatar: IMG.avatar2,
  },
  {
    quote: "The level of care and professionalism is unlike anything we've experienced. Our caregiver treats my husband as if he were her own family. We couldn't be more grateful.",
    name: "Sandra M.",
    city: "Chicago, IL",
    avatar: IMG.avatar3,
  },
  {
    quote: "From the very first consultation, PRIMELIFE made us feel heard and supported. The scheduling flexibility has been invaluable, and the quality of care is consistently excellent.",
    name: "James W.",
    city: "Houston, TX",
    avatar: IMG.avatar4,
  },
];

export const TEAM = [
  { name: "Dr. Evelyn Carter", title: "Director of Nursing, RN", bio: "20+ years in geriatric and home health care, leading our clinical excellence program.", img: IMG.avatar1 },
  { name: "Marcus Johnson", title: "Care Coordinator", bio: "Matches families with the perfect caregiver based on personality, needs, and lifestyle.", img: IMG.avatar2 },
  { name: "Sofia Ramirez", title: "Lead Caregiver", bio: "Certified dementia care specialist with a gift for compassionate companionship.", img: IMG.avatar3 },
  { name: "David Chen", title: "Family Liaison", bio: "Your dedicated point of contact for updates, scheduling, and care plan adjustments.", img: IMG.avatar4 },
];
