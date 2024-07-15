import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { IoIosAdd } from "../../assets/icons/icons";
import { addTask, getTasks, setAuthToken } from "../../api";

const Hero = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tag, setTag] = useState("");
  const [customTag, setCustomTag] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token);
        try {
          const data = await getTasks();
          setTasks(data.tasks);
        } catch (error) {
          alert(error.response.data.message || error.message);
        }
      }
    };

    fetchTasks();
  }, []);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleTagChange = (e) => {
    const selectedTag = e.target.value;
    setTag(selectedTag);
    setIsOtherSelected(selectedTag === "Others");
  };

  const handleCustomTagChange = (e) => {
    setCustomTag(e.target.value);
  };

  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleAddTask = async () => {
    const finalTag = tag === "Others" ? customTag : tag;
    const taskData = { task, description, date, time, tag: finalTag };
    const token = localStorage.getItem("token");
    try {
      await addTask(taskData);
      setTasks([...tasks, taskData]); // Append the new task to the list
      // Reset the form fields and hide additional input elements
      setTask("");
      setDescription("");
      setDate("");
      setTime("");
      setTag("");
      setCustomTag("");
      setIsOtherSelected(false);
      setIsAddingTask(false);
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  };

  return (
    <div className="font-primary max-sm:mx-[13rem] mx-[22rem] flex flex-col gap-[2rem]">
      <div className="flex flex-row items-center max-sm:gap-[2rem]">
        <h1 className=" max-sm:text-xl max-sm:whitespace-nowrap text-3xl">
          TO-DO LIST{" "}
        </h1>
        <div className="ml-auto flex flex-row gap-[2rem] text-2xl">
          <Button
            className="w-[7rem] rounded-sm py-1 bg-secondary hover:bg-white"
            value="Login"
            to="/login"
          />
          <Button
            className="w-[7rem] rounded-sm py-1 bg-secondary hover:bg-white"
            value="SignUp"
            to="/signup"
          />
        </div>
      </div>

      <div className="flex flex-row gap-3 mt-[2rem]">
        <Button onClick={handleAddTaskClick} value={<IoIosAdd />} />
        <input
          className="w-[50rem] outline-none"
          type="text"
          placeholder="Add New Task"
          value={task}
          onChange={handleTaskChange}
        />
      </div>

      {isAddingTask && (
        <>
          <input
            className="outline-none"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />

          <div className="flex flex-row mt-[1rem] gap-3  max-sm:ml-3 ">
            <input
              className="outline-none "
              type="date"
              placeholder="Date"
              value={date}
              onChange={handleDateChange}
            />
            <input
              className="outline-none"
              type="time"
              placeholder="Time"
              value={time}
              onChange={handleTimeChange}
            />
          </div>

          <div className="flex flex-col mt-[1rem]">
            <select
              className="outline-none"
              value={tag}
              onChange={handleTagChange}>
              <option value="">Select a tag</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
            </select>
            {isOtherSelected && (
              <input
                className="outline-none mt-[1rem]"
                type="text"
                placeholder="Custom Tag"
                value={customTag}
                onChange={handleCustomTagChange}
              />
            )}
          </div>

          <Button
            className="w-[7rem] py-1 mt-[2rem] rounded-sm bg-secondary hover:bg-white"
            value="Add Task"
            onClick={handleAddTask}
          />
        </>
      )}

      <div className="mt-[2rem]">
        {tasks.map((task, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            <h2 className="text-xl font-bold">{task.task}</h2>
            <p>{task.description}</p>
            <p>
              {task.date} at {task.time}
            </p>
            <p className="italic">{task.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
