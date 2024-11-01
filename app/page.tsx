import Header from "components/layout/Header";
import Card from "components/ui/home/maincard/Card";
import MainCard from "components/ui/home/maincard/MainCard";
import Sidebar from "components/ui/home/sidebar/Sidebar";
import Tags from "components/ui/home/tags/Tags";
const tags: string[] = [
  "Blockchain",
  "Data Science",
  "Technology",
  "Programming",
  "Machine Learning",
  "Python",
  "JavaScript",
  "Artificial Intelligence",
  "Data Visualization",
  "Science",
  "Tech",
  "UX",
  "Deep Learning",
  "Data",
  "Coding",
  "Software Engineering",
  "Web Development",
  "AWS",
  "DevOps",
  "Big Data",
  "Java",
  "Android",
  "Nodejs",
  "Docker",
  "Algorithms",
];
const miniTags:string[]=[
  "Data Science",
  "Python",
  "JavaScript",
  "AWS",
  "DevOps",
  "Nodejs",
  "Docker",
]
export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <main className="min-h-[calc(100vh-100px)]">
        <div className="grid grid-cols-3">
          <div className="sm:col-span-2 col-span-3 pr-6 border-r-2 border-t-2 border-[#F2F2F2]">
            <div className="border-b-2 border-gray-200">
              <Tags items={tags} />
            </div>
            <MainCard />
          </div>
          <div className="sm:col-span-1 px-6">
            <Sidebar items={miniTags}/>
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
