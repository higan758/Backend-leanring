import axios from 'axios';

const handleSignup = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', {
      username,
      email,
      password
    });

    console.log("Registration success:", res.data);
    alert("User registered!");
  } catch (err) {
    console.error("Registration error:", err.response?.data || err.message);
    alert(err.response?.data?.msg || "Something went wrong");
  }

  setIsLoading(false);
};
