import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
    return (
      <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        {/* LEFT  */}
        <div className="w-full xl:w-2/3">
          {/* TOP  */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* USER INFO CARD  */}
            <div className="bg-blue-200 py-6 px-4 rounded-md flex-1 flex gap-4">
              <div className="w-1/3">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt=""
                  width={144}
                  height={144}
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-semibold">Michel Jackson</h1>

                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      teacherId: "1234567890",
                      name: "John Doe",
                      email: "john@doe.com",
                      photo:
                        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      phone: "1234567890",
                      subjects: ["Math", "Geometry"],
                      classes: ["1B", "2A", "3C"],
                      address: "123 Main St, Anytown, USA",
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  This is the description about the teacher who teach these
                  subjects
                </p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/blood.png" alt="" width={14} height={14} />
                    <span>A+</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/date.png" alt="" width={14} height={14} />
                    <span>January 2025</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/mail.png" alt="" width={14} height={14} />
                    <span>user@email.com</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/phone.png" alt="" width={14} height={14} />
                    <span>+91 12345667890</span>
                  </div>
                </div>
              </div>
            </div>
            {/* SMALL CARDS  */}
            <div className="flex-1 flex gap-4 justify-between flex-wrap">
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[44%] 2xl:w-[47%]">
                <Image
                  src="/singleAttendance.png"
                  alt=" "
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-300">Attendance</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[44%] 2xl:w-[47%]">
                <Image
                  src="/singleBranch.png"
                  alt=" "
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">2</h1>
                  <span className="text-sm text-gray-300">Branches</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[44%] 2xl:w-[47%]">
                <Image
                  src="/singleLesson.png"
                  alt=" "
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-300">Lessons</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[44%] 2xl:w-[47%]">
                <Image
                  src="/singleClass.png"
                  alt=" "
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-300">Classes</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM  */}
          <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Teacher&apos;s Schedule</h1>
            <BigCalendar />
          </div>
        </div>
        {/* RIGHT  */}
        <div className="w-full xl:w-1/3 flex flex-col">
          <div className="bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
              <Link className="p-3 rounded-md bg-blue-100" href="/">
                Teacher&apos;s Classes
              </Link>
              <Link className="p-3 rounded-md bg-purple-100" href="/">
                Teacher&apos;s Students
              </Link>
              <Link className="p-3 rounded-md bg-green-100" href="/">
                Teacher&apos;s Lessons
              </Link>
              <Link className="p-3 rounded-md bg-yellow-100" href="/">
                Teacher&apos;s Exams
              </Link>
              <Link className="p-3 rounded-md bg-red-100" href="/">
                Teacher&apos;s Assignments
              </Link>
            </div>
          </div>
          <Performance />
          <Announcements />
        </div>
      </div>
    );
}

export default SingleTeacherPage;
