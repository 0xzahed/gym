export const IMG = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
  gymFloor:
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop",
  strength:
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
  muscle:
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
  fatloss:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  hiit: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop",
  functional:
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop",
  personal:
    "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1200&auto=format&fit=crop",
  yoga: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  boxing:
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
  cardio:
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop",
  nutrition:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
  community:
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1600&auto=format&fit=crop",
  cta: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2000&auto=format&fit=crop",
};

export const trainers = [
  {
    slug: "alex-rahman",
    name: "Alex Rahman",
    role: "Head Strength Coach",
    exp: "8 Years Experience",
    years: 8,
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    specs: ["Strength", "Hypertrophy", "Performance"],
    rating: 4.9,
    reviews: 214,
    bio: "Alex has coached 500+ athletes and everyday lifters. Former national powerlifting medallist, specialising in barbell strength, hypertrophy blocks and return-to-lift programming.",
    certs: ["NSCA-CSCS", "Powerlifting Level 2", "First Aid + CPR"],
    philosophy:
      "Strength is a skill. We build it patiently — perfect reps, smart progression, zero ego lifting.",
    slots: ["Mon 7–11 AM", "Tue 4–8 PM", "Thu 7–11 AM", "Sat 8–12 PM"],
    classes: ["HIIT Power", "Barbell Club", "Lower Body Strength"],
  },
  {
    slug: "sara-khan",
    name: "Sara Khan",
    role: "HIIT & Conditioning Coach",
    exp: "6 Years Experience",
    years: 6,
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    specs: ["HIIT", "Fat Loss", "Mobility"],
    rating: 4.8,
    reviews: 186,
    bio: "Sara leads our metabolic conditioning program. Known for high-energy classes that scale to every level — from first-timers to competitive athletes.",
    certs: ["ACE-CPT", "HIIT Specialist", "Mobility & Recovery"],
    philosophy: "Train hard, recover harder. Consistency beats intensity every time.",
    slots: ["Mon 5–9 PM", "Wed 6–10 AM", "Fri 5–9 PM"],
    classes: ["HIIT Power", "Metcon Express", "Core Crusher"],
  },
  {
    slug: "daniel-chowdhury",
    name: "Daniel Chowdhury",
    role: "Bodybuilding Coach",
    exp: "10 Years Experience",
    years: 10,
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    specs: ["Muscle Gain", "Nutrition", "Posing"],
    rating: 5.0,
    reviews: 142,
    bio: "Daniel has prepared 30+ athletes for stage and helped hundreds build lean muscle with evidence-based hypertrophy and nutrition periodisation.",
    certs: ["IFBB Coach Cert.", "Precision Nutrition L1", "Hypertrophy Science"],
    philosophy: "Muscle is built with precision — training, food, sleep. We track all three.",
    slots: ["Tue 7–11 AM", "Thu 4–8 PM", "Sun 9–1 PM"],
    classes: ["Upper Body Pump", "Hypertrophy Lab"],
  },
  {
    slug: "maria-islam",
    name: "Maria Islam",
    role: "Yoga & Recovery Coach",
    exp: "7 Years Experience",
    years: 7,
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    specs: ["Yoga", "Breathwork", "Recovery"],
    rating: 4.9,
    reviews: 178,
    bio: "Maria blends vinyasa, mobility and breathwork to keep members injury-free, mobile and calm — the perfect counterweight to hard training.",
    certs: ["RYT-500", "FRC Mobility", "Breathwork Facilitator"],
    philosophy: "Flexibility is strength at length. Recovery is training.",
    slots: ["Wed 7–11 AM", "Sat 7–11 AM", "Sun 4–7 PM"],
    classes: ["Sunrise Yoga", "Deep Stretch", "Breath & Core"],
  },
];

export const programs = [
  {
    slug: "strength-training",
    name: "Strength Training",
    desc: "Build power, strength and confidence.",
    level: "Intermediate",
    duration: "60 min",
    img: IMG.strength,
    tag: "Most trained",
  },
  {
    slug: "muscle-building",
    name: "Muscle Building",
    desc: "Hypertrophy blocks for lean, dense muscle.",
    level: "All levels",
    duration: "75 min",
    img: IMG.muscle,
    tag: "Hypertrophy",
  },
  {
    slug: "fat-loss",
    name: "Fat Loss",
    desc: "Metabolic training + nutrition coaching.",
    level: "Beginner",
    duration: "45 min",
    img: IMG.fatloss,
    tag: "High burn",
  },
  {
    slug: "hiit",
    name: "HIIT",
    desc: "Short, intense, brutally effective intervals.",
    level: "Advanced",
    duration: "40 min",
    img: IMG.hiit,
    tag: "45-min blast",
  },
  {
    slug: "functional",
    name: "Functional Training",
    desc: "Move better — carry, lift, sprint, climb.",
    level: "All levels",
    duration: "50 min",
    img: IMG.functional,
    tag: "Athletic",
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    desc: "1-on-1 coaching built around your body.",
    level: "Custom",
    duration: "60 min",
    img: IMG.personal,
    tag: "1-on-1",
  },
];

export const classes = [
  { time: "06:00 AM", name: "Barbell Club", dur: "60 MIN", level: "Intermediate", coach: "Alex Rahman", cat: "Strength", seats: "18 / 20", state: "Available" },
  { time: "07:00 AM", name: "HIIT Power", dur: "45 MIN", level: "Intermediate", coach: "Sara Khan", cat: "HIIT", seats: "18 / 20", state: "Almost Full" },
  { time: "08:30 AM", name: "Sunrise Yoga", dur: "60 MIN", level: "All levels", coach: "Maria Islam", cat: "Yoga", seats: "9 / 25", state: "Available" },
  { time: "12:15 PM", name: "Metcon Express", dur: "30 MIN", level: "Advanced", coach: "Sara Khan", cat: "HIIT", seats: "20 / 20", state: "Full" },
  { time: "05:30 PM", name: "Upper Body Pump", dur: "55 MIN", level: "All levels", coach: "Daniel Chowdhury", cat: "Strength", seats: "14 / 22", state: "Available" },
  { time: "07:00 PM", name: "Boxing Fundamentals", dur: "60 MIN", level: "Beginner", coach: "Alex Rahman", cat: "Boxing", seats: "7 / 16", state: "Available" },
  { time: "08:00 PM", name: "Night Ride", dur: "45 MIN", level: "All levels", coach: "Sara Khan", cat: "Cardio", seats: "22 / 24", state: "Almost Full" },
  { time: "06:30 AM", name: "Deep Stretch", dur: "40 MIN", level: "All levels", coach: "Maria Islam", cat: "Yoga", seats: "12 / 20", state: "Booked" },
];

export const plans = [
  {
    name: "Starter",
    price: "৳1,500",
    per: "/ month",
    desc: "Everything you need to start training.",
    features: ["Full gym floor access", "Locker facility", "Basic equipment zones", "1 group class / week", "App progress tracking"],
    cta: "Choose Starter",
    popular: false,
  },
  {
    name: "Performance",
    price: "৳2,500",
    per: "/ month",
    desc: "Our most-loved plan for consistent progress.",
    features: ["Full gym access", "Unlimited group classes", "Personalised workout plan", "Progress tracking + reviews", "Trainer support", "Nutrition starter guide"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Elite",
    price: "৳4,500",
    per: "/ month",
    desc: "Maximum coaching, maximum results.",
    features: ["Everything in Performance", "4× personal training / month", "Custom nutrition plan", "Priority class booking", "Monthly body assessment", "Recovery zone access"],
    cta: "Go Elite",
    popular: false,
  },
];

export const transformations = [
  { name: "Tanvir H.", goal: "Weight Loss", before: "94 KG", after: "78 KG", duration: "7 months", result: "−16 KG", img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=800&auto=format&fit=crop" },
  { name: "Nusrat J.", goal: "Muscle Gain", before: "52 KG", after: "59 KG", duration: "9 months", result: "+7 KG lean", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" },
  { name: "Rafiul K.", goal: "Strength", before: "80 KG SQ", after: "140 KG SQ", duration: "12 months", result: "+60 KG squat", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop" },
];

export const testimonials = [
  { name: "Mehedi Hasan", meta: "Member for 2 years", rating: 5, text: "I joined for the equipment, I stayed for the coaches. Down 16kg and stronger than ever at 34.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Priya Das", meta: "Member for 1 year", rating: 5, text: "As a beginner I was nervous. The assessment and personal plan made everything feel doable.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Arif Chowdhury", meta: "Member for 3 years", rating: 5, text: "Cleanest gym in the city. 6AM crowd, great music, zero waiting for racks.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
];

export const goals = [
  { icon: "dumbbell", title: "Build Muscle", desc: "Build strength and lean muscle." },
  { icon: "flame", title: "Lose Weight", desc: "Burn fat and improve conditioning." },
  { icon: "heart", title: "Improve Fitness", desc: "Build stamina and endurance." },
  { icon: "leaf", title: "Stay Active", desc: "Improve mobility and overall health." },
  { icon: "zap", title: "Athletic Performance", desc: "Improve speed, strength and performance." },
];

export const timetable: Record<string, { time: string; name: string; coach: string }[]> = {
  MON: [
    { time: "6:00 AM", name: "Barbell Club", coach: "Alex" },
    { time: "7:00 AM", name: "HIIT Power", coach: "Sara" },
    { time: "5:30 PM", name: "Boxing Basics", coach: "Alex" },
  ],
  TUE: [
    { time: "6:30 AM", name: "Upper Pump", coach: "Daniel" },
    { time: "12:15 PM", name: "Metcon", coach: "Sara" },
    { time: "7:00 PM", name: "Yoga Flow", coach: "Maria" },
  ],
  WED: [
    { time: "6:00 AM", name: "Barbell Club", coach: "Alex" },
    { time: "8:30 AM", name: "Sunrise Yoga", coach: "Maria" },
    { time: "6:00 PM", name: "HIIT Power", coach: "Sara" },
  ],
  THU: [
    { time: "7:00 AM", name: "Lower Strength", coach: "Alex" },
    { time: "5:30 PM", name: "Hypertrophy Lab", coach: "Daniel" },
  ],
  FRI: [
    { time: "6:00 AM", name: "Metcon Express", coach: "Sara" },
    { time: "7:00 PM", name: "Boxing Sparring", coach: "Alex" },
  ],
  SAT: [
    { time: "8:00 AM", name: "Weekend Warrior", coach: "Team" },
    { time: "10:00 AM", name: "Deep Stretch", coach: "Maria" },
  ],
};
