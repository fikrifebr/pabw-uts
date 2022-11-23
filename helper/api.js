export const updateData = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uts/update`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  const dt = res.json();
  return dt;
};

export const createData = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uts/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  const dt = res.json();
  return dt;
};

export const deleteData = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uts/delete`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  const dt = res.json();
  return dt;
};

export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/uts/get");
  const data = await res.json();
  return data;
};
