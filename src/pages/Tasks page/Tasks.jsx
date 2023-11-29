import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TaskCard from "../../components/tasks/TaskCard";
import { useState } from "react";
// import MyModal from "../components/ui/MyModal";
import AddTaskModal from "../../components/tasks/AddTaskModal";
// import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MyTasks from "../../components/tasks/MyTasks";
// import { getToDB } from "../../components/utils/database";
import { AuthContext } from "../../providers/TaskProvider";
import { Button } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Tasks = () => {
    const {tasks, setTasks, getToDB } = React.useContext(AuthContext);
  let [isOpen, setIsOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
// const [] = useState(Array.isArray(getToDB()) ? getToDB() : []);
 const task = [
   {
     id: 1,
     assign: "Md kabir Islam",
     status: "pending",
     deadline: "2023/9/8",
     description: "new year new me task here",
     priority: "low",
     title: "new task",
   },
   {
     id: 2,
     assign: "Md kabir Islam",
     status: "done",
     deadline: "2023/9/8",
     description: "new year new me task here",
     priority: "low",
     title: "new task",
   },
   {
     id: 3,
     assign: "Md kabir Islam",
     status: "running",
     deadline: "2023/9/8",
     description: "new year new me task here",
     priority: "low",
     title: "new task",
   },
 ];



  // material ui function
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

//  const tasks = Array.isArray(getToDB()) ? getToDB() : [];

 const pendingTask = tasks.filter(item => item.status == "pending");
 const runningTask = tasks.filter(item => item.status == "running");
 const doneTask = tasks.filter(item => item.status == "done");



  return (
    <div className="h-screen mx-auto ">
      <div className="col-span-9 pt-10 mx-1 ">
        <div className="flex gap-5 justify-between items-center w-100 mx-auto bg-slate-100 lg:bg-transparent">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <Button variant="outlined" onClick={() => setIsOpen(!isOpen)}>
              Add Task
            </Button>
            <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="h-10 rounded-xl ">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography>
                      <Link to="/login">Login</Link> <br />
                      <Link to="/signUp">Signup</Link>
                    </Typography>
                  </MenuItem>
                  {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-3 gap-5 mt-10">
          {/* pending tasks */}
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Pending</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {pendingTask?.length}
              </p>
            </div>
            <div className="space-y-3 bg-red-200">
              {pendingTask?.map(item => (
                <TaskCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          {/* running Tasks or in progress */}
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {runningTask?.length}
              </p>
            </div>
            <div className="space-y-3 bg-yellow-200">
              {runningTask?.map(item => (
                <TaskCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          {/* completed tasks */}
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Compleat</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {doneTask?.length}
              </p>
            </div>
            <div className="space-y-3 bg-sky-400">
              {doneTask?.map(item => (
                <TaskCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
