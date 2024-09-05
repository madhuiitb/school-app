
const Announcements = () => {
    return (
      <div className="bg-white p-4 rounded gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold my-4">Announcements</h1>
          <span className="mt-2 text-gray-400 text-xs">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-blue-200 rounded-md p-4 ">
            <div className="flex items-center justify-between">
              <h2 className="text-md">Test</h2>
              <span className="text-xs  text-gray-400 bg-white rounded-md p-1">
                2025-01-01
              </span>
            </div>
            <p className="text-xs text-gray-400">Text descriptions</p>
          </div>
          <div className="bg-yellow-100 rounded-md p-4 ">
            <div className="flex items-center justify-between">
              <h2 className="text-md">Test</h2>
              <span className="text-xs  text-gray-400 bg-white rounded-md p-1">
                2025-01-01
              </span>
            </div>
            <p className="text-xs text-gray-400">Text descriptions</p>
          </div>
          <div className="bg-purple-100 rounded-md p-4 ">
            <div className="flex items-center justify-between">
              <h2 className="text-md">Test</h2>
              <span className="text-xs  text-gray-400 bg-white rounded-md p-1">
                2025-01-01
              </span>
            </div>
            <p className="text-xs text-gray-400">Text descriptions</p>
          </div>
        </div>
      </div>
    );
}

export default Announcements;