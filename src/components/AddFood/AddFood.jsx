import React from 'react'
import './AddFood.css'

const AddFood = ( { onAddFood } ) => {
    const [showForm, setShowForm] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null
    });

    const [imagePreview, setImagePreview] = React.useState(null);

    const categories = [
        "Salad",
        "Rolls",
        "Deserts",
        "Sandwich",
        "Cake",
        "Pure Veg",
        "Pasta",
        "Noodles"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, image: file }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };


     const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Tạo FormData để gửi file
        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('description', formData.description);
        submitData.append('price', formData.price);
        submitData.append('category', formData.category);
        if (formData.image) {
        submitData.append('image', formData.image);
        }

        try {
        await onAddFood(submitData);
        // Reset form
        setFormData({
            name: '',
            description: '',
            price: '',
            category: '',
            image: null
        });
        setImagePreview(null);
        setShowForm(false);
        alert('Thêm món ăn thành công!');
        } catch (error) {
        console.error('Error adding food:', error);
        alert('Có lỗi xảy ra khi thêm món ăn');
        }
    };
  
  return (
    <div className="add-food-container">
        <button type="button" className='add-food-btn' onClick={() => setShowForm(!showForm)}>{showForm ? 'Close Form' : 'Add Food'}</button>
        {showForm && (
            <div className="add-food-modal">
                <div className="add-food-form-container">
                    <h2>Add New Food Item</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Image:</label>
                            <div className="image-upload-box">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="image-preview" />
                                ) : (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="image"
                                        onChange={handleImageChange}
                                    />
                                )}
                            </div>
                            
                            {/* Name */}
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Type food name here...'
                                    required
                                />  
                            </div>
                            {/* Description */}
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea
                                    value={formData.description}
                                    onChange={handleChange}
                                    name="description"
                                    placeholder='Type food description here...'
                                    required
                                />
                            </div>
                            {/* Category */}
                            <div className="form-group">
                                <label>Category:</label>
                                <select
                                    value={formData.category}
                                    onChange={handleChange}
                                    name="category"
                                    placeholder='Select category'
                                    required
                                >
                                    <option value="">Select category</option>
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Price */}
                            <div className="form-group">
                                <label>Price:</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={handleChange}
                                    name="price"
                                    placeholder='Enter price'
                                    min="0"
                                    required
                                />
                            </div>

                            {/* Button */}
                            <div className="form-buttons">
                                <button type="submit" className="submit-btn">Submit</button>
                                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
  )
}

export default AddFood
