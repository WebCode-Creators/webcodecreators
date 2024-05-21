import type { Metadata } from "next";
import { Inter, Lato, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Poppins({weight:["100","200","300","400","500","600","700", "800","900"], subsets: ['latin']},);
const inter = Lato({weight:["100","300","400","700","900"], subsets: ['latin']},);

export const metadata: Metadata = {
  title: "WebCodeCreators | Home",
  viewport: {
    width: "device-width",
    initialScale:1,
    userScalable:false
  },
  openGraph:{
    images:['https://webcodecreators.vercel.app/assets/app.logo']
  },
  description: "\"WebCodeCreators,\" a web development company ,At WebCodeCreators, we craft digital experiences that seamlessly blend creativity, functionality, and innovation. As a leading web development company, we specialize in transforming your ideas into dynamic websites that captivate audiences and drive results.Our team of skilled developers, designers, and strategists are passionate about harnessing the power of technology to bring your vision to life. Whether you're a startup looking to establish your online presence or an established business aiming to enhance your digital footprint, we have the expertise to meet your unique needs.",
  generator : 'Website development Kerala,App development Kerala, ,Kerala web design,Kerala mobile app development,Best web developers in Kerala,Top app developers Kerala,Custom website design Kerala,Android app development Kerala,iOS app development Kerala,Website designers Kochi,Mobile app developers Trivandrum,Website development companies Kerala,App development companies Kerala,E-commerce website development Kerala,Software development Kerala,Web application development Kerala,WordPress website development Kerala,Mobile app development services Kerala,Web development courses Kerala,Freelance web developers Kerala,Affordable website development Kerala,Startup website development Kerala,Website redesign Kerala,Mobile app redesign Kerala,Digital marketing for websites Kerala,UI/UX design Kerala,Responsive web design Kerala,Progressive web app development Kerala,Small business website development Kerala,Enterprise app development Kerala,Website maintenance Kerala,App maintenance Kerala,Website hosting Kerala,SEO for websites Kerala,App store optimization Kerala,Web development internship Kerala,Mobile app development internship Kerala,Website development training Kerala,App development training Kerala,UI/UX design training Kerala,Website development tools Kerala,Mobile app development tools Kerala,Web development trends Kerala,App development trends Kerala,Cross-platform app development Kerala,Native app development Kerala,Hybrid app development Kerala,Blockchain app development Kerala,AI integration in web development Kerala,AR/VR app development Kerala,Chatbot development Kerala,Game development Kerala,Mobile game development Kerala,Website security Kerala,App security Kerala,Website accessibility Kerala,App accessibility Kerala,Website analytics Kerala,App analytics Kerala,Content management system Kerala,E-commerce app development Kerala,Payment gateway integration Kerala,Social media integration Kerala,Cloud-based app development Kerala,Website backup services Kerala,App backup services Kerala,Data-driven web development Kerala,Data analytics for apps Kerala,IoT app development Kerala,Wearable app development Kerala,Health app development Kerala,Education app development Kerala,Finance app development Kerala,Travel app development Kerala,Food delivery app development Kerala,Real estate app development Kerala,Taxi booking app development Kerala,Event management app development Kerala,Appointment scheduling app development Kerala,Chat app development Kerala,Dating app development Kerala,Entertainment app development Kerala,Video streaming app development Kerala,Audio streaming app development Kerala,Language learning app development Kerala,Job portal app development Kerala,Recruitment app development Kerala,HR management app development Kerala,CRM app development Kerala,Inventory management app development Kerala,Fleet management app development Kerala,Logistics app development Kerala,Asset tracking app development Kerala,Task management app development Kerala,Productivity app development Kerala,Collaboration app development Kerala,Remote work app development Kerala,Time tracking app development Kerala,Expense management app development Kerala,Budgeting app development Kerala'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
