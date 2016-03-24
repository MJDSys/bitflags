(function() {var implementors = {};
implementors['bitflags'] = ["impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/boxed/struct.Box.html' title='bitflags::__core::boxed::Box'>Box</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/boxed/struct.Box.html' title='bitflags::__core::boxed::Box'>Box</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.str.html'>str</a>&gt;","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/boxed/struct.Box.html' title='bitflags::__core::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/vec/struct.Vec.html' title='bitflags::__core::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/thread/struct.Thread.html' title='bitflags::__core::thread::Thread'>Thread</a>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='enum' href='bitflags/__core/thread/enum.LocalKeyState.html' title='bitflags::__core::thread::LocalKeyState'>LocalKeyState</a>","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_map/struct.Iter.html' title='bitflags::__core::collections::hash_map::Iter'>Iter</a>&lt;'a, K, V&gt;","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_map/struct.RandomState.html' title='bitflags::__core::collections::hash_map::RandomState'>RandomState</a>","impl&lt;K, V, S&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/struct.HashMap.html' title='bitflags::__core::collections::HashMap'>HashMap</a>&lt;K, V, S&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a>, S: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a>, V: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_map/struct.Keys.html' title='bitflags::__core::collections::hash_map::Keys'>Keys</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_map/struct.Values.html' title='bitflags::__core::collections::hash_map::Values'>Values</a>&lt;'a, K, V&gt;","impl&lt;'a, T, S&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_set/struct.Union.html' title='bitflags::__core::collections::hash_set::Union'>Union</a>&lt;'a, T, S&gt;","impl&lt;T, S&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/struct.HashSet.html' title='bitflags::__core::collections::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a>, S: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, T, S&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_set/struct.Intersection.html' title='bitflags::__core::collections::hash_set::Intersection'>Intersection</a>&lt;'a, T, S&gt;","impl&lt;'a, T, S&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_set/struct.Difference.html' title='bitflags::__core::collections::hash_set::Difference'>Difference</a>&lt;'a, T, S&gt;","impl&lt;'a, K&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_set/struct.Iter.html' title='bitflags::__core::collections::hash_set::Iter'>Iter</a>&lt;'a, K&gt;","impl&lt;'a, T, S&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/hash_set/struct.SymmetricDifference.html' title='bitflags::__core::collections::hash_set::SymmetricDifference'>SymmetricDifference</a>&lt;'a, T, S&gt;","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/struct.BinaryHeap.html' title='bitflags::__core::collections::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/binary_heap/struct.Iter.html' title='bitflags::__core::collections::binary_heap::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_map/struct.Keys.html' title='bitflags::__core::collections::btree_map::Keys'>Keys</a>&lt;'a, K, V&gt;","impl&lt;K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/struct.BTreeMap.html' title='bitflags::__core::collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a>, V: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_map/struct.Iter.html' title='bitflags::__core::collections::btree_map::Iter'>Iter</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_map/struct.Values.html' title='bitflags::__core::collections::btree_map::Values'>Values</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_map/struct.Range.html' title='bitflags::__core::collections::btree_map::Range'>Range</a>&lt;'a, K, V&gt;","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.BTreeSet.html' title='bitflags::__core::collections::btree_set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/struct.LinkedList.html' title='bitflags::__core::collections::LinkedList'>LinkedList</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/linked_list/struct.Iter.html' title='bitflags::__core::collections::linked_list::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/linked_list/struct.IntoIter.html' title='bitflags::__core::collections::linked_list::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.Intersection.html' title='bitflags::__core::collections::btree_set::Intersection'>Intersection</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.Difference.html' title='bitflags::__core::collections::btree_set::Difference'>Difference</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.SymmetricDifference.html' title='bitflags::__core::collections::btree_set::SymmetricDifference'>SymmetricDifference</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.Iter.html' title='bitflags::__core::collections::btree_set::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.Range.html' title='bitflags::__core::collections::btree_set::Range'>Range</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/btree_set/struct.Union.html' title='bitflags::__core::collections::btree_set::Union'>Union</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='enum' href='bitflags/__core/collections/enum.Bound.html' title='bitflags::__core::collections::Bound'>Bound</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.VecDeque.html' title='bitflags::__core::collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.Iter.html' title='bitflags::__core::collections::vec_deque::Iter'>Iter</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.IntoIter.html' title='bitflags::__core::collections::vec_deque::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='enum' href='bitflags/__core/env/enum.VarError.html' title='bitflags::__core::env::VarError'>VarError</a>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/ffi/struct.CString.html' title='bitflags::__core::ffi::CString'>CString</a>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/ffi/struct.NulError.html' title='bitflags::__core::ffi::NulError'>NulError</a>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/ffi/struct.IntoStringError.html' title='bitflags::__core::ffi::IntoStringError'>IntoStringError</a>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/sync/struct.Weak.html' title='bitflags::__core::sync::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='bitflags/__core/marker/trait.Sized.html' title='bitflags::__core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/sync/struct.Arc.html' title='bitflags::__core::sync::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='bitflags/__core/marker/trait.Sized.html' title='bitflags::__core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/vec/struct.IntoIter.html' title='bitflags::__core::vec::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/rc/struct.Rc.html' title='bitflags::__core::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='bitflags/__core/marker/trait.Sized.html' title='bitflags::__core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/rc/struct.Weak.html' title='bitflags::__core::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='bitflags/__core/marker/trait.Sized.html' title='bitflags::__core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='enum' href='bitflags/__core/string/enum.ParseError.html' title='bitflags::__core::string::ParseError'>ParseError</a>","impl&lt;'a&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/str/struct.EncodeUtf16.html' title='bitflags::__core::str::EncodeUtf16'>EncodeUtf16</a>&lt;'a&gt;","impl&lt;'a, B&gt; <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='enum' href='bitflags/__core/borrow/enum.Cow.html' title='bitflags::__core::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='bitflags/__core/borrow/trait.ToOwned.html' title='bitflags::__core::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='bitflags/__core/marker/trait.Sized.html' title='bitflags::__core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a> for <a class='struct' href='bitflags/__core/boxed/struct.ExchangeHeapSingleton.html' title='bitflags::__core::boxed::ExchangeHeapSingleton'>ExchangeHeapSingleton</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
