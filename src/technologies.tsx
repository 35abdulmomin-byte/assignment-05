import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function Technologies() {
  const [techList, setTechList] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading JSON:', err);
        setLoading(false);
      });
  }, []);

  const addToStack = (item: Technology) => {
    const isAlreadyAdded = stack.some((tech) => tech.id === item.id);
    if (isAlreadyAdded) {
      toast.warn(`"${item.name}" is already in your stack!`);
      return;
    }
    setStack([...stack, item]);
    toast.success(`Added "${item.name}" to your stack!`);
  };

  const removeFromStack = (item: Technology) => {
    setStack(stack.filter((tech) => tech.id !== item.id));
    toast.info(`Removed "${item.name}" from stack.`);
  };

  const clearStack = () => {
    setStack([]);
    toast.error('Cleared all technologies from stack.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer autoClose={2000} />

    
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p style={{ color: '#666' }}>Pick technologies to build your ideal stack.</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', fontSize: '1.2rem', color: '#666' }}>
          ⏳ Loading technologies...
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          
        
          <div style={{
            flex: '1 1 65%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            {techList.map((item) => {
              const isAdded = stack.some((s) => s.id === item.id);
              return (
                <div key={item.id} style={{
                  border: '1px solid #eee',
                  borderRadius: '12px',
                  padding: '16px',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <img src={item.icon} alt={item.name} width="32" height="32" />
                      <span style={{ fontSize: '11px', background: '#e0f7fa', color: '#00838f', padding: '2px 8px', borderRadius: '12px' }}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 style={{ margin: '12px 0 6px 0', fontSize: '1.1rem' }}>{item.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>{item.description}</p>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <div style={{ display: 'flex', gap: '6px', fontSize: '11px', color: '#888', marginBottom: '12px' }}>
                      <span style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>{item.category}</span>
                      <span style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>{item.difficulty}</span>
                      <span style={{ marginLeft: 'auto', color: '#fbc02d', fontWeight: 'bold' }}>★ {item.rating}</span>
                    </div>

                    <button
                      onClick={() => addToStack(item)}
                      disabled={isAdded}
                      className={isAdded ? '' : 'gradient-btn'}
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '6px',
                        border: 'none',
                        background: isAdded ? '#ccc' : undefined,
                        color: '#fff',
                        cursor: isAdded ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

      
          <div style={{
            flex: '1 1 280px',
            border: '1px solid #eee',
            borderRadius: '12px',
            padding: '20px',
            background: '#fff',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Your Stack</h3>
              {stack.length > 0 && (
                <button 
                  onClick={clearStack} 
                  style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '12px' }}
                >
                  Remove All
                </button>
              )}
            </div>
            
            <p style={{ fontSize: '12px', color: '#666', marginTop: 0 }}>
              {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
            </p>

            {stack.length === 0 ? (
              <div style={{
                border: '2px dashed #ddd',
                borderRadius: '8px',
                padding: '30px',
                textAlign: 'center',
                color: '#aaa',
                fontSize: '13px'
              }}>
                Your stack is empty.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {stack.map((item) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    border: '1px solid #eee',
                    borderRadius: '6px',
                    background: '#f8fafc'
                  }}>
                    <img src={item.icon} alt={item.name} width="20" height="20" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{item.name}</div>
                      <div style={{ fontSize: '10px', color: '#666' }}>{item.category}</div>
                    </div>
                    <button
                      onClick={() => removeFromStack(item)}
                      style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}

export default Technologies;